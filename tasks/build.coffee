AppConfig = require("../config/application")

gulp = require("gulp")
gutil = require("gulp-util")
plumber = require("gulp-plumber")

express = require("express")
livereload = require("gulp-livereload")

server = express()
server.use(require("connect-livereload")())
server.use(express.static(AppConfig.buildpaths.root))

gulp.task "html", ["clean:html"], ->
  gulp.src(AppConfig.paths.views)
    .pipe(plumber())
    .pipe(gulp.dest(AppConfig.buildpaths.root))
    .pipe(livereload())

gulp.task "stylesheets", ["clean:stylesheets"], ->
  gulp.src(AppConfig.paths.stylesheets)
    .pipe(plumber())
    .pipe(gulp.dest(AppConfig.buildpaths.stylesheets))
    .pipe(livereload())

gulp.task "images", ["clean:images"], ->
  gulp.src(AppConfig.paths.images)
    .pipe(gulp.dest(AppConfig.buildpaths.images))
    .pipe(livereload())

gulp.task "build", ["html", "stylesheets", "images"]

gulp.task "serve", ["build"], ->
  livereload.listen()
  server.listen(AppConfig.serverport)

  gulp.watch(AppConfig.paths.views, ["html"])
  gulp.watch(AppConfig.paths.stylesheets, ["stylesheets"])
  gulp.watch(AppConfig.paths.images, ["images"])

  gutil.log("Listening on 0.0.0.0:#{AppConfig.serverport}")
