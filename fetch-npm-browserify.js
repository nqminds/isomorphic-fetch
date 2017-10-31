// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
if (typeof global.self === "undefined") { // Self is not available by default in react-native
  global.self = global;
}
require('whatwg-fetch');
module.exports = self.fetch.bind(self);
