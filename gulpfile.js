const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.style = tasks.styles;
exports.build_js = tasks.build_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.ttf = tasks.ttf;
exports.fonts = tasks.fonts;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
	exports.style,
	// exports.libs_js,
	exports.dev_js,
    exports.rastr,
	exports.webp,
	exports.ttf = tasks.ttf,
	exports.fonts = tasks.fonts,
	exports.html,
	exports.bs_html,
	exports.watch
)