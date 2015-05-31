module.exports =
  paths:
    views: "app/views/**/*.jade"
    stylesheets: "app/components/**/*.postcss"
    javascripts: "app/components/**/*.jsx"
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
    entries: ["./app/components/application.jsx"]
    extensions: [".jsx"]
    paths: ["./app/components"]
