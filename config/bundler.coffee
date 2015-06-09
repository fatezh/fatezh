AppConfig = require("./application")

browserify = require("browserify")
watchify = require("watchify")
assign = require("lodash/object/assign")

production = -> process.env.NODE_ENV is "production"

bundler = if production()
  browserify(AppConfig.browserify)
else
  watchify(browserify(assign({}, watchify.args, AppConfig.browserify)))

bundler.transform("babelify").transform("brfs")

module.exports = bundler
