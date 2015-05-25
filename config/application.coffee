module.exports =
  paths:
    views: "app/views/**/*.jade"
    stylesheets: "app/stylesheets/**/*.css"
    images: "app/images/**/*"
    mainstylesheet: "app/stylesheets/application.css"

  buildpaths:
    root: "build"
    deploy: "build/**/*"
    views: "build/*.html"
    stylesheets: "build/stylesheets"
    images: "build/images"

  serverport: 4000
