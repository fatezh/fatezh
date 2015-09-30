import AppConfig from "./application"

import autoprefixer from "autoprefixer"
import postcssVars from "postcss-simple-vars"
import postcssImport from "postcss-import"
import postcssNested from "postcss-nested"
import postcssMixins from "postcss-mixins"

export default [
  postcssImport({ from: AppConfig.paths.mainstylesheet, glob: true }),
  postcssMixins,
  postcssNested,
  postcssVars,
  autoprefixer
]
