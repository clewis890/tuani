const path = require('path')


module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}




// module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
//   webpack(config, options) {
//     config.resolve.modules.push(path.resolve("./"));
//     return config;
//   },
// });