const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
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
    'react': 'React',
    'react-dom': 'ReactDOM',
    'mobx': 'mobx',
    'mobx-react': 'mobxReact'
  }
}