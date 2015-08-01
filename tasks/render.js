import gulp from "gulp"
import jade from "gulp-jade"
import plumber from "gulp-plumber"

import React from "react"
import Router from "react-router"

import routes from "../src/components/ApplicationRouter"
import AppConfig from "../config/application"

const renderPath = (path) => {
  let html

  Router.run(routes, path, (Handler) => {
    html = React.renderToString(<Handler />)
  })

  return html
}

gulp.task("render", () => {
  gulp.src(AppConfig.paths.mainview)
    .pipe(plumber(AppConfig.plumber))
    .pipe(jade({ locals: { contents: renderPath("/") } }))
    .pipe(gulp.dest(AppConfig.buildpaths.root))
})
