import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Include your source files
    'node_modules/preline/dist/*.js',  // Add preline content
  ],

  theme: {
    extend: {}
  },

  plugins: [
    typography, // Add the typography plugin
    require('preline/plugin') // Add the preline plugin
  ]
};
