AppConfig = require("../config/application")

gulp = require("gulp")
gutil = require("gulp-util")
plumber = require("gulp-plumber")
jade = require("gulp-jade")
postcss = require("gulp-postcss")
rename = require("gulp-rename")

browserify = require("browserify")
source = require("vinyl-source-stream")

express = require("express")
livereload = require("gulp-livereload")

server = express()
server.use(require("connect-livereload")())
server.use(express.static(AppConfig.buildpaths.root))

bundler = browserify(AppConfig.browserify)

gulp.task "html", ["clean:html"], ->
  gulp.src(AppConfig.paths.views)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(AppConfig.buildpaths.root))
    .pipe(livereload())

gulp.task "stylesheets", ["clean:stylesheets"], ->
  gulp.src(AppConfig.paths.stylesheets)
    .pipe(plumber())
    .pipe(postcss(require("../config/postcss")))
    .pipe(rename((path) -> path.extname = ".css"))
    .pipe(gulp.dest(AppConfig.buildpaths.stylesheets))
    .pipe(livereload())

gulp.task "javascripts", ["clean:javascripts"], ->
  bundler.transform("babelify")
    .bundle()
    .pipe(source("application.js"))
    .pipe(gulp.dest(AppConfig.buildpaths.javascripts))
    .pipe(livereload())

gulp.task "images", ["clean:images"], ->
  gulp.src(AppConfig.paths.images)
    .pipe(gulp.dest(AppConfig.buildpaths.images))
    .pipe(livereload())

gulp.task "build", ["html", "stylesheets", "images", "javascripts"]

gulp.task "serve", ["build"], ->
  livereload.listen()
  server.listen(AppConfig.serverport)

  gulp.watch(AppConfig.paths.views, ["html"])
  gulp.watch(AppConfig.paths.stylesheets, ["stylesheets"])
  gulp.watch(AppConfig.paths.images, ["images"])
  gulp.watch(AppConfig.paths.javascripts, ["javascripts"])

  gutil.log("Listening on 0.0.0.0:#{AppConfig.serverport}")
