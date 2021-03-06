/* global require, module */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const cssNext = require('postcss-cssnext');
const cssImport = require('postcss-import');

module.exports = function(defaults) {
  const app = new EmberAddon(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: cssImport },
          { module: cssNext }
        ]
      }
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
