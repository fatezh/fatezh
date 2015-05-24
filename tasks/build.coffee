AppConfig = require("../config/application")

gulp = require("gulp")
gutil = require("gulp-util")
plumber = require("gulp-plumber")

express = require("express")
tinylr = require("tiny-lr")
livereload = require("gulp-livereload")

lr = tinylr()
server = express()
server.use(require("connect-livereload")())
server.use(express.static(AppConfig.buildpaths.root))

gulp.task "html", ["clean:html"], ->
  gulp.src(AppConfig.paths.views)
    .pipe(plumber())
    .pipe(gulp.dest(AppConfig.buildpaths.root))
    .pipe(livereload(lr))

gulp.task "stylesheets", ["clean:stylesheets"], ->
  gulp.src(AppConfig.paths.stylesheets)
    .pipe(plumber())
    .pipe(gulp.dest(AppConfig.buildpaths.stylesheets))
    .pipe(livereload(lr))

gulp.task "build", ["html", "stylesheets"]

gulp.task "serve", ["build"], ->
  lr.listen(AppConfig.lrport)
  server.listen(AppConfig.serverport)

  gulp.watch(AppConfig.paths.views, ["html"])
  gulp.watch(AppConfig.paths.stylesheets, ["stylesheets"])

  gutil.log("Listening on 0.0.0.0:#{AppConfig.serverport}")
