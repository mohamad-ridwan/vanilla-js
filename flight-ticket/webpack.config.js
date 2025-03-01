const path = require('path');

module.exports = {
  entry: [
    // scripts
    './scripts/components/container.js',
    './scripts/components/input.js',
    './scripts/components/header.js',
    './scripts/features/pages/index.js',
    // './scripts/features/pages/ticket-booking.js',
    // './scripts/features/pages/ticket-cancellation.js',
    './scripts/features/pages/ticket-search.js',
    './scripts/templates/container.js',
    './scripts/templates/input.js',
    './scripts/templates/header.js',
    './scripts/services/api.js',
    './scripts/services/base-url.js',
    './scripts/utils/with-twind.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  mode: 'development',
};