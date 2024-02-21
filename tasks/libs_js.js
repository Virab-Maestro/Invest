const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function libs_js(done) {
    return src(plugins)
        .pipe(map.init())
        .pipe(uglify())
        .pipe(concat('libs.min.js'))
        .pipe(map.write('../sourcemaps'))
        .pipe(dest('build/js/'))
        // .pipe(bs.stream())
}