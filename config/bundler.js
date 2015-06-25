import AppConfig from "./application"

import browserify from "browserify"
import babelify from "babelify"
import watchify from "watchify"
import assign from "lodash/object/assign"

const production = process.env.NODE_ENV == "production"
let bundler = browserify(AppConfig.browserify)

if (!production) {
  bundler = watchify(browserify(assign({}, watchify.args, AppConfig.browserify)))
}

bundler.transform(babelify.configure({ stage: 0 })).transform("brfs")

export default bundler
