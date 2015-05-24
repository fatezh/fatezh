AppConfig = require("../config/application")

gulp = require("gulp")
deploy = require("gulp-gh-pages")
REMOTE_URL = "git@github.com:fatezh/fatezh.github.io.git"
REMOTE_BRANCH = "master"

gulp.task "deploy", ["build"], ->
  gulp.src(AppConfig.buildpaths.deploy)
    .pipe(deploy(remoteUrl: REMOTE_URL, branch: REMOTE_BRANCH))

gulp.task "deploy:ci", ["build"], ->
  gulp.src(AppConfig.buildpaths.deploy)
    .pipe(deploy(remoteUrl: process.env.GH_REPO_URL, branch: REMOTE_BRANCH))
