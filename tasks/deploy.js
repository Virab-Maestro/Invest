const {src}        = require('gulp');
const deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
module.exports = function deploy_build () {
  return src("../build/**/*")
    .pipe(deploy())
};