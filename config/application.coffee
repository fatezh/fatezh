module.exports =
  paths:
    views: "app/views/**/*.jade"
    stylesheets: "app/stylesheets/**/*.postcss"
    javascripts: "app/javascripts/**/*.jsx"
    images: "app/images/**/*"

  buildpaths:
    root: "build"
    deploy: "build/**/*"
    views: "build/*.html"
    stylesheets: "build/stylesheets"
    javascripts: "build/javascripts"
    images: "build/images"

  serverport: 4000

  browserify:
    entries: ["./app/javascripts/application.jsx"]
    extensions: [".jsx"]
    paths: ["./app/javascripts"]
