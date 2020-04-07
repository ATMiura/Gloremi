const gulp = require('gulp')
module.exports = function script() {
  return gulp.src('src/pages/images/*.{gif,png,jpg,svg,webp}')
    .pipe(gulp.dest('build/img'))
}
