const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const scss_styles = require('./gulp/tasks/scss')
const css_styles = require('./gulp/tasks/css')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const images = require('./gulp/tasks/images')
//const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const lighthouse = require('./gulp/tasks/lighthouse')
//const svgSprite = require('./gulp/tasks/svgSprite')

const dev = gulp.parallel(pug2html, scss_styles, css_styles,  script, fonts, images/*imageMinify, svgSprite*/)

const build = gulp.series(clean, copyDependencies, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = build

module.exports.lighthouse = gulp.series(lighthouse)
