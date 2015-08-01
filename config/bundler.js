import AppConfig from "./application"

import browserify from "browserify"
import babelify from "babelify"
import watchify from "watchify"

const production = process.env.NODE_ENV == "production"
let bundler = browserify(AppConfig.browserify)

if (!production) {
  bundler = watchify(browserify(Object.assign({}, watchify.args, AppConfig.browserify)))
}

export default bundler
