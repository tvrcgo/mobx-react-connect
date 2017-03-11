const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'umd',
    library: 'mobxReactConnect',
    path: __dirname,
    filename: './index.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'stage-0', 'react' ],
          plugins: [
            'transform-decorators-legacy'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      minimize: true,
      output: {
        comments: false,
      },
    })
  ],
  externals: {
    'react': {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'mobx-react': {
      root: 'mobxReact',
      commonjs: 'mobx-react',
      commonjs2: 'mobx-react',
      amd: 'mobx-react'
    },
    'mobx': 'mobx'
  }
}