AppConfig = require("../config/application")

gulp = require("gulp")
deploy = require("gulp-gh-pages")

gulp.task "deploy", ["build"], ->
  gulp.src(AppConfig.buildpaths.deploy)
    .pipe(deploy())

gulp.task "deploy:ci", ["build"], ->
  gulp.src(AppConfig.buildpaths.deploy)
    .pipe(deploy(remoteUrl: process.env.GH_REPO_URL))
