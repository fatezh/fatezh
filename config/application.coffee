module.exports =
  paths:
    views: "app/views/**/*.jade"
    stylesheets: "app/stylesheets/**/*.postcss"
    images: "app/images/**/*"

  buildpaths:
    root: "build"
    deploy: "build/**/*"
    views: "build/*.html"
    stylesheets: "build/stylesheets"
    images: "build/images"

  serverport: 4000
