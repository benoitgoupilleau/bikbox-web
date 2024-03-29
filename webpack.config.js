const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env' });
}

const bundleAnalysis = process.env.BUNDLE_ANALYSIS === 'true';

module.exports = (env) => {
  const isProduction = env === 'production';
  const optimization = {};
  const plugins = [
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
    plugins.push(new HtmlWebpackPlugin({ template: 'index.ejs', filename: path.join(__dirname, 'public', 'index.html')}))
    optimization.runtimeChunk = true;
    optimization.splitChunks = {
      chunks: 'all',
      minSize: 200000,
      maxSize: 500000
    };
    optimization.minimizer = [
      new UglifyJSPlugin({
        uglifyOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  } else {
    plugins.push(new HtmlWebpackPlugin({ template: 'index.ejs', filename: path.join(__dirname, 'public', 'index.html'), alwaysWriteToDisk: true }), new HtmlWebpackHarddiskPlugin())
  }
  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      publicPath: '/dist/',
      filename: '[name].js',
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
      publicPath: '/dist/',
      historyApiFallback: true,
      port: 3000
    }
  };
};
