import AppConfig from "../config/application"
import gulp from "gulp"
import rimraf from "rimraf"

gulp.task("clean:html", (cb) => rimraf(AppConfig.buildpaths.views, cb))
gulp.task("clean:stylesheets", (cb) => rimraf(AppConfig.buildpaths.stylesheets, cb))
gulp.task("clean:javascripts", (cb) => rimraf(AppConfig.buildpaths.javascripts, cb))
gulp.task("clean:assets", (cb) => rimraf(AppConfig.buildpaths.images, cb))
gulp.task("clean", (cb) => rimraf(AppConfig.buildpaths.root, cb))
