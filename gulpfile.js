const sass = require('gulp-sass');
gulp.task("styles",function(){
  gulp
  .src("sass/**/*.scss")
  .pipe(sass())
  .on("error",sass.logError)
  .pipe(gulp.dest("./css"));
});
const autoprefixer = require('gulp-autoprefixer');
gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"));
});
gulp.task("default",["styles"],function(){
  gulp.watch("sass/**/*.scss",["styles"]);
});