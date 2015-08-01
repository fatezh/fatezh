import gulp from "gulp"
import jade from "gulp-jade"
import rename from "gulp-rename"

import React from "react"
import Router from "react-router"

import routes from "../src/components/ApplicationRouter"
import posts from "../src/posts"
const postUrls = posts.map((post) => `/posts/${post.slug}`)
import AppConfig from "../config/application"

const renderPath = (path) => {
  let html

  Router.run(routes, path, (Handler) => {
    html = React.renderToString(<Handler />)
  })

  return html
}

postUrls.forEach((url) => {
  gulp.task(`render:${url}`, () => {
    gulp.src(AppConfig.paths.mainview)
      .pipe(jade({ locals: { contents: renderPath(`${url}.html`) } }))
      .pipe(rename((path) => path.basename = url))
      .pipe(gulp.dest(AppConfig.buildpaths.root))
  })
})

gulp.task("render", postUrls.map((url) => `render:${url}`), () => {
  gulp.src(AppConfig.paths.mainview)
    .pipe(jade({ locals: { contents: renderPath("/") } }))
    .pipe(gulp.dest(AppConfig.buildpaths.root))
})
