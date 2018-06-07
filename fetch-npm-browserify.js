// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.

// Self is not available by default in react-native, fix this.
if (typeof global.self === "undefined") {
  global.self = global;
}

require('whatwg-fetch');
module.exports = self.fetch.bind(self);
