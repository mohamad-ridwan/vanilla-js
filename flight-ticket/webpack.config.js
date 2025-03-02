const path = require('path');

module.exports = {
  entry: [
    './src/services/api.js',
    './src/services/base-url.js',
    './src/utils/with-twind.js',
    './src/templates/ticket-search.js',
    './src/templates/container.js',
    './src/templates/input.js',
    './src/templates/header.js',
    './src/templates/ticket.js',
    './src/templates/ticket-lists.js',
    './src/components/ticket-search.js',
    './src/components/container.js',
    './src/components/ticket-lists.js',
    './src/components/input.js',
    './src/components/header.js',
    './src/components/ticket.js',
    './src/features/pages/index.js',
    // './src/features/pages/ticket-booking.js',
    // './src/features/pages/ticket-cancellation.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  mode: 'development',
};