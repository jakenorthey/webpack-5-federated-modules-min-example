const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ContainerReferencePlugin = require('webpack/lib/container/ContainerReferencePlugin')
module.exports = {
  entry: {
    main: './src/index.ts', 
  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve('dist/'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
    new ContainerReferencePlugin({
      remoteType: 'var',
      remotes: ['remote'],
    }),
  ],
  devServer: {
    open: true,
  },
}

