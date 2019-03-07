// Guardamos en variables las dependencias que vamos a necesitar
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


sass.complier = require('node-sass')

function style() {
  return gulp.src('./sass/**/*.sass') // elegimos la fuente (el archivo sass)
    .pipe(sass().on('error', sass.logError)) //compilamos esa fuente en css
    .pipe(gulp.dest('./stylesheets')) //enviamos esa compilación a un nuevo directorio
    .pipe(browserSync.stream()); //observa los cambios en todos los navegadores
}

function watch() {
  browserSync.init({
    server: {
      baseDir:'./'
    }
  });
  gulp.watch('./sass/**/*.sass', style);
  gulp.watch('./*html').on('change', browserSync.reload);
  //si usamos js
  //gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

//Si exportamos style compilamos nuestro sass
exports.style = style;
//Si exportamos watch creamos un navegador que actualiza nuestros cambios
exports.watch = watch;
//Es como watch, solo que basta con ejecutar "gulp" en la terminal
exports.default = watch;
