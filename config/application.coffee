highlight = require("highlight.js")

module.exports =
  paths:
    views: "src/views/**/*.jade"
    stylesheets: "src/**/*.postcss"
    javascripts: "src/**/*.{jsx,js}"
    images: "src/images/**/*"
    posts: "src/posts/*.md"
    mainstylesheet: "src/application.postcss"

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

  markdown:
    highlight: (code) -> highlight.highlightAuto(code).value

  typograf:
    lang: "ru"
    disable: ["common/sym/cf"]
    enable: ["ru/optalign/*"]
