AppConfig = require("../config/application")

gulp = require("gulp")
rimraf = require("rimraf")

gulp.task "clean:html", (cb) -> rimraf(AppConfig.buildpaths.views, cb)
gulp.task "clean:stylesheets", (cb) -> rimraf(AppConfig.buildpaths.stylesheets, cb)
gulp.task "clean:images", (cb) -> rimraf(AppConfig.buildpaths.images, cb)
gulp.task "clean", (cb) -> rimraf(AppConfig.buildpaths.root, cb)
