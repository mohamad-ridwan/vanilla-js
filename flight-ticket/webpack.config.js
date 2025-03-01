const path = require('path');

module.exports = {
  entry: [
    // scripts
    './src/components/container.js',
    './src/components/input.js',
    './src/components/header.js',
    './src/features/pages/index.js',
    // './src/features/pages/ticket-booking.js',
    // './src/features/pages/ticket-cancellation.js',
    './src/features/pages/ticket-search.js',
    './src/templates/container.js',
    './src/templates/input.js',
    './src/templates/header.js',
    './src/services/api.js',
    './src/services/base-url.js',
    './src/utils/with-twind.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  mode: 'development',
};