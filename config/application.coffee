module.exports =
  paths:
    views: "src/views/**/*.jade"
    stylesheets: "src/**/*.postcss"
    javascripts: "src/**/*.{jsx,js}"
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
