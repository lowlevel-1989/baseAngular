//Dependencias
var browserSync   = require('browser-sync');
var browserify    = require('gulp-browserify');
var concat        = require('gulp-concat');
var del           = require('del');
var expect        = require('gulp-expect-file');
var exists        = require('path-exists');
var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var minifyCSS     = require('gulp-minify-css');
var minifyHTML    = require('gulp-minify-html');
var minifyJS      = require('gulp-uglify');
var htmlify       = require('gulp-angular-htmlify');
var reload        = browserSync.reload;
var stylus        = require('gulp-stylus');
var nib           = require('nib');
var jshint        = require('gulp-jshint');
var templateCache = require('gulp-angular-templatecache');
var stripDebug    = require('gulp-strip-debug');

//Archivos a copiar a dist

var _PROYECTOJS = [
   'app/index.js',
   'app/**/*.js'
];

var _HTML = [
   'app/shared/**/*.html', 
   'app/components/**/*.html'
];

var _PREFIXES = [
   'fc-'
];

var _STYLUS = 'assets/stylus/**/*.styl';

//Solo las dependencias
var _CSS = [
   'assets/libs/mdi/css/**/*.min.*',
   'assets/libs/angular-material/angular-material.min.css'
];

//Solo las dependencias
var _JAVASCRIPT = [
   'assets/libs/jquery/dist/*.min.*',
   'assets/libs/angular/*.min.*',
   'assets/libs/angular-route/*.min.*',
   'assets/libs/moment/min/*.min.*',
   'assets/libs/angular-animate/*.min.*',
   'assets/libs/angular-aria/*.min.*',
   'assets/libs/angular-material/angular-material.min.js',
   'assets/libs/angular-local-storage/dist/angular-local-storage.min.js',
   
];

//Todas las fuentes tanto tuyas como de dependencias
var _FONTS = [
   'assets/fonts/**/*',
   'assets/libs/mdi/fonts/**/*'
];

//Todas las imagenes tanto tuyas como de dependencias
var _IMGS = [
   'assets/img/**/*'
];

var _BASE = [
   'index.html'
];

var _DEBUG = false;

//Tareas
gulp.task('minify-css', function(){
   gulp.src(_STYLUS)
   .pipe(concat('style.min.styl'))
   .pipe(stylus({ use: nib(),  import: ['nib']}))
   .pipe(minifyCSS())
   .pipe(gulp.dest('dist/assets/css'))
   .pipe(expect({verbose: true}, 'dist/assets/css/style.min.css'))
   .pipe(reload({stream: true, once: true}));
});

gulp.task('minify-js', function(){
   gulp.src(_PROYECTOJS[0])
   .pipe(browserify())
   .pipe(concat('main.min.js'))
   .pipe(gulpif(!_DEBUG, minifyJS()))
   .pipe(gulpif(!_DEBUG, stripDebug()))
   .pipe(gulp.dest('dist/assets/js'))
   .pipe(expect({verbose: true}, 'dist/assets/js/main.min.js'))
   .pipe(reload({stream: true, once: true}));
});

gulp.task('lint', function(){
   gulp.src(_PROYECTOJS)
   .pipe(jshint())
   .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('minify-html', function(){
   gulp.src(_HTML)
   .pipe(htmlify({
      customPrefixes: _PREFIXES
   }))
   .pipe(minifyHTML())
   .pipe(templateCache({
      root: '/',
      module: 'templates',
      standalone: true
   }))
   .pipe(gulp.dest('dist/assets/js'))
   .pipe(expect({verbose: true}, 'dist/assets/js/templates.js'))
   .pipe(reload({stream: true, once: true}));
});

gulp.task('copyBase', function(){
   gulp.src(_BASE)
   .pipe(gulp.dest('dist'))
   .pipe(expect({verbose: true}, 'dist/'+_BASE));
});


gulp.task('copyCss', function(){
   gulp.src(_CSS)
   .pipe(gulp.dest('dist/assets/css'));
});


gulp.task('copyJs', function(){
   gulp.src(_JAVASCRIPT)
   .pipe(gulp.dest('dist/assets/js'));
});


gulp.task('copyImgs', function(){
   gulp.src(_IMGS)
   .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('copyFonts', function(){
   gulp.src(_FONTS)
   .pipe(gulp.dest('dist/assets/fonts'));
});


gulp.task('watch', function() {
   _DEBUG = true;
   // Cambios principales
   gulp.watch(_PROYECTOJS, ['lint', 'minify-js']);
   gulp.watch(_STYLUS,     ['minify-css']);
   gulp.watch(_HTML,       ['minify-html']);
});

gulp.task('server-start', function () {
   browserSync({
      notify: false,
      server: 'dist/'
   });
});


//Tareas IMPORTANTES

gulp.task('debug', function() {
   gulp.start('lint');
});

gulp.task('clean', function(callback) {
   del(['dist']).then(function (paths) {
      callback()
   });
});

gulp.task('dist', ['clean'], function() {
   if (process.argv[3] === '--debug')
      _DEBUG = true;
   gulp.start('copyBase', 'copyCss', 'copyJs', 'copyImgs', 'copyFonts', 'minify-css', 'minify-html', 'minify-js', 'lint');
});

gulp.task('server', function() {
   gulp.src(['dist'])
   .pipe(expect({verbose: true}, ['dist']));
   exists('dist').then(function(isExist){
      if (isExist){
         gulp.start('server-start');
         if (process.argv[3] === '--watch')
            gulp.start('watch');
      }
  });
});

