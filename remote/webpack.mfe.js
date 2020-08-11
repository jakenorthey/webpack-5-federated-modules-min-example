const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ContainerPlugin = require('webpack/lib/container/ContainerPlugin')
module.exports = {
  entry: {
    main: './src/index.tsx', 
  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve('dist/'),
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html'
    }),
    new ContainerPlugin({
      name: 'remote',
      library: { type: 'var', name: 'remote' },
      filename: 'remoteEntry.js',
      exposes: {'./spa': './src/spa.tsx'},
      /*shared: {
        react: {},
        'react-dom': {},
      },*/
    }),
  ],
}

