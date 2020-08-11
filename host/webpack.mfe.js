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
}

