const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require('../../webpack.config.js')
const webpack = require("webpack")

module.exports = function (app) {
  app.use(webpackMiddleware(webpack(webpackConfig)))
}
