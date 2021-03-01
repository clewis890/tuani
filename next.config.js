// const path = require('path')
const withImages = require('next-images');

module.exports = withImages();



// module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
//   webpack(config, options) {
//     config.resolve.modules.push(path.resolve("./"));
//     return config;
//   },
// });