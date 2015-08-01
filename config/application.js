import highlight from "highlight.js"
import gutil from "gulp-util"

export default {
  serverport: 4000,

  paths: {
    mainview: "src/index.jade",
    stylesheets: "src/**/*.postcss",
    javascripts: "src/**/*.{jsx,js}",
    assets: "src/assets/**/*",
    posts: "src/posts/*.md",
    mainstylesheet: "src/application.postcss",
    humans: "src/humans.txt"
  },

  buildpaths: {
    root: "build",
    deploy: "build/**/*",
    views: "build/*.html",
    stylesheets: "build/stylesheets",
    javascripts: "build/javascripts",
    posts: "src/posts",
    images: "build/images"
  },

  browserify: {
    entries: ["src/application.js"]
  },

  plumber: {
    errorHandler: function(err) {
      gutil.log(err.message)
      this.emit("end")
    }
  },

  markdown: {
    highlight: (code) => highlight.highlightAuto(code).value
  },

  typograf: {
    lang: "ru",
    disable: ["common/sym/cf"],
    enable: ["ru/optalign/*"]
  }
}
