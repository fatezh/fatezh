module.exports =
  paths:
    views: "src/views/**/*.jade"
    stylesheets: "src/components/**/*.postcss"
    javascripts: "src/components/**/*.jsx"
    images: "src/images/**/*"
    mainstylesheet: "src/application.postcss"

  buildpaths:
    root: "build"
    deploy: "build/**/*"
    views: "build/*.html"
    stylesheets: "build/stylesheets"
    javascripts: "build/javascripts"
    images: "build/images"

  serverport: 4000

  browserify:
    entries: ["./src/application.jsx"]
    extensions: [".jsx"]
    paths: ["./src/components"]
