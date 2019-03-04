// Guardamos en variables las dependencias que vamos a necesitar
var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

//Creamos una tarea que compila sass
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass') // elegimos la fuente (el archivo sass)
    .pipe(sass()) //compilamos esa fuente en css
    .pipe(gulp.dest('./stylesheets')); //enviamos esa compilación a un nuevo directorio
});

// La tarea Watch vigila los cambios en los archivos sass, y corre el preprocesador con la tarea “sass” y recarga la información.
gulp.task('watch-sass', function() {
   gulp.watch("./sass/**/*.sass", ['sass']);
    //Basicamente, watch vigila, el primer argumento indica donde vigilar y el segundo (la
    //tarea) que hacer cuando algo cambia.
  });
//Vuelve a ejecutar la tarea cuando se modifica algún archivo
gulp.task('default', ['watch-sass']);
