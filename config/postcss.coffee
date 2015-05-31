AppConfig = require "./application"

autoprefixer = require("autoprefixer-core")
postcssVars = require("postcss-simple-vars")
postcssImport = require("postcss-import")
postcssNested = require("postcss-nested")
postcssMixins = require("postcss-mixins")

module.exports = [
  postcssImport(from: AppConfig.paths.main_stylesheet, glob: true),
  postcssMixins,
  postcssNested,
  postcssVars,
  autoprefixer
]
