import AppConfig from "../config/application"
import bundler from "../config/bundler"

import gulp from "gulp"
import gutil from "gulp-util"
import plumber from "gulp-plumber"
import jade from "gulp-jade"
import postcss from "gulp-postcss"
import rename from "gulp-rename"
import markdown from "gulp-markdown"
import typograf from "gulp-typograf"

import source from "vinyl-source-stream"

import express from "express"
import livereload from "gulp-livereload"

const bundle = () => {
  return bundler
    .bundle()
    .on("error", AppConfig.plumber.errorHandler)
    .pipe(source("application.js"))
    .pipe(gulp.dest(AppConfig.buildpaths.javascripts))
    .pipe(livereload())
}

gulp.task("html", ["clean:html"], () => {
  gulp.src(AppConfig.paths.mainview)
    .pipe(plumber(AppConfig.plumber))
    .pipe(jade())
    .pipe(gulp.dest(AppConfig.buildpaths.root))
    .pipe(livereload())
})

gulp.task("posts", () => {
  gulp.src(AppConfig.paths.posts)
    .pipe(plumber(AppConfig.plumber))
    .pipe(markdown(AppConfig.markdown))
    .pipe(typograf(AppConfig.typograf))
    .pipe(gulp.dest(AppConfig.buildpaths.posts))
})

gulp.task("stylesheets", ["clean:stylesheets"], () => {
  gulp.src(AppConfig.paths.mainstylesheet)
    .pipe(plumber(AppConfig.plumber))
    .pipe(postcss(require("../config/postcss")))
    .pipe(rename((path) => path.extname = ".css"))
    .pipe(gulp.dest(AppConfig.buildpaths.stylesheets))
    .pipe(livereload())
})

gulp.task("javascripts", ["clean:javascripts"], bundle)

gulp.task("assets", ["clean:assets"], () => {
  gulp.src(AppConfig.paths.assets)
    .pipe(gulp.dest(AppConfig.buildpaths.root))
    .pipe(livereload())
})

gulp.task("build", ["html", "stylesheets", "assets", "javascripts", "posts"])

gulp.task("serve", ["build"], () => {
  const server = express()
  server.use(require("connect-livereload")())
  server.use(express.static(AppConfig.buildpaths.root))

  livereload.listen()
  server.listen(AppConfig.serverport)

  gulp.watch(AppConfig.paths.mainview, ["html"])
  gulp.watch(AppConfig.paths.stylesheets, ["stylesheets"])
  gulp.watch(AppConfig.paths.assets, ["assets"])
  gulp.watch(AppConfig.paths.posts, ["posts"])
  bundler.on("update", bundle)

  gutil.log(`Listening on 0.0.0.0:${AppConfig.serverport}`)
})
