AppConfig = require("../config/application")
bundler = require("../config/bundler")

gulp = require("gulp")
gutil = require("gulp-util")
plumber = require("gulp-plumber")
jade = require("gulp-jade")
postcss = require("gulp-postcss")
rename = require("gulp-rename")
markdown = require("gulp-markdown")
typograf = require("gulp-typograf")

source = require("vinyl-source-stream")

express = require("express")
livereload = require("gulp-livereload")

server = express()
server.use(require("connect-livereload")())
server.use(express.static(AppConfig.buildpaths.root))

bundle = ->
  bundler
    .bundle()
    .on("error", (e) -> gutil.log(e.toString()); @emit("end"))
    .pipe(source("application.js"))
    .pipe(gulp.dest(AppConfig.buildpaths.javascripts))
    .pipe(livereload())

gulp.task "html", ["clean:html"], ->
  gulp.src(AppConfig.paths.views)
    .pipe(plumber(AppConfig.plumber))
    .pipe(jade())
    .pipe(gulp.dest(AppConfig.buildpaths.root))
    .pipe(livereload())

gulp.task "posts", ->
  gulp.src(AppConfig.paths.posts)
    .pipe(plumber(AppConfig.plumber))
    .pipe(markdown(AppConfig.markdown))
    .pipe(typograf(AppConfig.typograf))
    .pipe(gulp.dest(AppConfig.buildpaths.posts))

gulp.task "stylesheets", ["clean:stylesheets"], ->
  gulp.src(AppConfig.paths.mainstylesheet)
    .pipe(plumber(AppConfig.plumber))
    .pipe(postcss(require("../config/postcss")))
    .pipe(rename((path) -> path.extname = ".css"))
    .pipe(gulp.dest(AppConfig.buildpaths.stylesheets))
    .pipe(livereload())

gulp.task "javascripts", ["clean:javascripts"], bundle

gulp.task "assets", ["clean:assets"], ->
  gulp.src(AppConfig.paths.assets)
    .pipe(gulp.dest(AppConfig.buildpaths.root))
    .pipe(livereload())

gulp.task "build", ["html", "stylesheets", "assets", "javascripts", "posts"]

gulp.task "serve", ["build"], ->
  livereload.listen()
  server.listen(AppConfig.serverport)

  gulp.watch(AppConfig.paths.views, ["html"])
  gulp.watch(AppConfig.paths.stylesheets, ["stylesheets"])
  gulp.watch(AppConfig.paths.assets, ["assets"])
  gulp.watch(AppConfig.paths.posts, ["posts"])
  bundler.on "update", bundle

  gutil.log("Listening on 0.0.0.0:#{AppConfig.serverport}")
