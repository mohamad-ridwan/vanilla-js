const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/services/api.js',
    './src/services/base-url.js',
    './src/utils/with-twind.js',
    './src/templates/button.js',
    './src/templates/ticket-booking.js',
    './src/templates/ticket-search.js',
    './src/templates/container.js',
    './src/templates/input.js',
    './src/templates/header.js',
    './src/templates/ticket.js',
    './src/templates/ticket-lists.js',
    './src/components/button.js',
    './src/components/ticket-booking.js',
    './src/components/ticket-search.js',
    './src/components/container.js',
    './src/components/ticket-lists.js',
    './src/components/input.js',
    './src/components/header.js',
    './src/components/ticket.js',
    './src/features/pages/index.js',
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/ticket-booking'),
    clean: true
  },
  watch: true,
  mode: 'production',
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    compression: 'gzip'
  },
  optimization: {
    moduleIds: 'deterministic', // Memastikan hash stabil
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/ticket-booking.html', // Template HTML Anda
    }),
  ],
};