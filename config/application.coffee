highlight = require("highlight.js")
gutil = require("gulp-util")

module.exports =
  paths:
    views: "src/**/*.jade"
    stylesheets: "src/**/*.postcss"
    javascripts: "src/**/*.{jsx,js}"
    assets: "src/assets/**/*"
    posts: "src/posts/*.md"
    mainstylesheet: "src/application.postcss"
    humans: "src/humans.txt"

  buildpaths:
    root: "build"
    deploy: "build/**/*"
    views: "build/*.html"
    stylesheets: "build/stylesheets"
    javascripts: "build/javascripts"
    posts: "src/posts"
    images: "build/images"

  serverport: 4000

  browserify:
    entries: ["./src/application.jsx"]
    extensions: [".jsx"]
    paths: ["./src/components"]

  plumber:
    errorHandler: (err) ->
      gutil.log(err.message)
      @emit("end")

  markdown:
    highlight: (code) -> highlight.highlightAuto(code).value

  typograf:
    lang: "ru"
    disable: ["common/sym/cf"]
    enable: ["ru/optalign/*"]
