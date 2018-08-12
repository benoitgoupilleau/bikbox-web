const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env' });
}

const bundleAnalysis = process.env.BUNDLE_ANALYSIS === 'true';

module.exports = (env) => {
  const isProduction = env === 'production';
  const optimization = {
    splitChunks: {
      chunks: 'all',
      minSize: 50000,
      maxSize: 250000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -10
        },
      }
    }
  }
  const plugins = [
    new HtmlWebpackPlugin({ template: 'index.ejs', filename: path.join(__dirname, 'public', 'index.html') }),
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'process.env.X_KEY': JSON.stringify(process.env.X_KEY),
      'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
      'process.env.PERSIST_KEY': JSON.stringify(process.env.PERSIST_KEY)
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ];
  if (bundleAnalysis) plugins.push(new BundleAnalyzerPlugin())
  if (isProduction) {
    optimization.minimizer = [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      chunkFilename: '[name].js'
    },
    optimization,
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },{
        test: /\.css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
      }]
    }, 
    plugins: plugins,
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
      port: 3000
    }
  };
};
