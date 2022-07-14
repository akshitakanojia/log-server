const path = require('path');

function getPlugins() {
  console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan
  console.log('\x1b[33m%s\x1b[0m', 'I am yellow');  //yellow
  return [];
}

module.exports = () => {
  console.log('\x1b[36m%s\x1b[0m', 'I am cyan');  //cyan
  console.log('\x1b[33m%s\x1b[0m', 'I am yellow');  //yellow

  return {
    mode: 'production',
    entry: './app.js',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'final.js',
    },
    target: 'node',
  }
};