import AppConfig from "../config/application"

import gulp from "gulp"
import deploy from "gulp-gh-pages"

const REMOTE_URL = "git@github.com:fatezh/fatezh.github.io.git"
const REMOTE_BRANCH = "master"

gulp.task("deploy", () => {
  gulp.src(AppConfig.buildpaths.deploy)
    .pipe(deploy({ remoteUrl: REMOTE_URL, branch: REMOTE_BRANCH }))
})

gulp.task("deploy:ci", () => {
  gulp.src(AppConfig.buildpaths.deploy)
    .pipe(deploy({ remoteUrl: process.env.GH_REPO_URL, branch: REMOTE_BRANCH }))
})
