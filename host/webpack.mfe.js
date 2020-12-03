const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ContainerReferencePlugin = require('webpack/lib/container/ContainerReferencePlugin')
const SharePlugin = require('webpack/lib/sharing/SharePlugin')
module.exports = {
  entry: {
    main: './src/index.tsx', 
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            configFile: path.resolve('tsconfig.json'),
          },
        },
      },
    ],
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
      remotes: ['dashboard'],
    }),
    new SharePlugin({
      shared: {
        react: {
          eager: true
        },
        'react-dom': {
          eager: true
        },
      },
      shareScope: 'default',
    }),
  ],
  devServer: {
    open: true,
  },
}

