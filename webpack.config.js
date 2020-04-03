const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1339,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      },
      {
        test: /\.(css)$/,
        use: [
          {loader: `style-loader`},
          {loader: `css-loader`}
        ]
      },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
  devtool: `source-map`,
};
