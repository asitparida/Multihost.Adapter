var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    htmlToJsCompiler = require('gulp-html-to-js'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    babel = require('gulp-babel'),
    msx = require('gulp-msx'),
    vueify = require('gulp-vueify');

var errorHandler = function (error) {
    console.log(error);
    this.emit('end');
}

var resolveMinifiedPath = function (path) {
    var params = path.split("/");
    var file = params.splice(params.length - 1, 1)[0];
    var newPath = params.join("/") + "/";

    return {
        file: file,
        path: newPath
    };
}

// Clean the distributable css directory
gulp.task('minify:clean:css', function () {
    return del('css/');
});

// Compile out sass files and minify it
gulp.task('minify:css', ['minify:clean:css'], function () {
    var min = resolveMinifiedPath("./dist/css/app.min.css");
    return gulp.src('scss/*.scss')
        .pipe(plumber(errorHandler))
        .pipe(sass())        
        .pipe(cssmin())
        .pipe(concat(min.file))
        .pipe(gulp.dest(min.path));
});

gulp.task('minify:lib:css', function () {
    return gulp.src([
        'lib/css/*.css',
        'lib/css/*.min.css',
        ])
        .pipe(cssmin())
        .pipe(concat('lib.min.css'))
        .pipe(gulp.dest('dist/css'));
});

//Watch CSS task
gulp.task('default:css', function () {
    gulp.watch('scss/*.scss', ['minify:css']);
});

gulp.task('minify:lib:base:js', function () {
    return gulp.src([
        'lib/base/*.js',
        'lib/base/*.min.js',
        ])
        .pipe(concat('base.lib.min.js'))
        .pipe(gulp.dest('dist/min'));
});

/*
 * ANGULAR 1.X RELATED MINIFIED FILES
 */

gulp.task('minify:lib:ng-1', function (cb) {
    pump([
          gulp.src(['lib/@angular1/angular.min.js', 'lib/@angular1/**/*.js']),
          uglify(),
          concat('@angular1.lib.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

/*
 * ANGULAR 2.X RELATED MINIFIED FILES
 */

gulp.task('minify:lib:ng-2', function (cb) {
    pump([
          gulp.src([
              //'lib/@angular2/shim.min.js',
              'lib/@angular2/zone.min.js',
              'lib/@angular2/Reflect.js',
              'lib/@angular2/Rx.min.js',
              'lib/@angular2/extensions/core.umd.min.js',
              'lib/@angular2/extensions/common.umd.min.js',
              'lib/@angular2/extensions/compiler.umd.min.js',
              'lib/@angular2/extensions/http.umd.min.js',
              'lib/@angular2/extensions/forms.umd.min.js',
              'lib/@angular2/extensions/platform-browser.umd.min.js',
              'lib/@angular2/extensions/platform-browser-dynamic.umd.min.js',              
          ]),
          //uglify(),
          concat('@angular2.lib.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

/*
 * REACT RELATED MINIFIED FILES
 */

gulp.task('minify:lib:react', function (cb) {
    pump([
          gulp.src([
              'lib/react/react.min.js',
              'lib/react/react-dom.min.js'
          ]),
          //uglify(),
          concat('react.lib.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

/*
 * MITHRIL RELATED MINIFIED FILES
 */

gulp.task('minify:lib:mithril', function (cb) {
    pump([
          gulp.src([
              'lib/mithril/mithril.js',
          ]),
          uglify(),
          concat('mithril.lib.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

/*
 * MITHRIL RELATED MINIFIED FILES
 */

gulp.task('minify:lib:vue', function (cb) {
    pump([
          gulp.src([
              'lib/vue/vue.min.js',
          ]),
          //uglify(),
          concat('vue.lib.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

/*
 * LAUNCH RELATED MINIFIED FILES
 */

gulp.task('minify:js:launch', ['minify:js:launch:views:concat'], function (cb) {    
    pump([
          gulp.src(['minifiedTemplates/launch.templates.min.js', 'wwwroot/launch/**/*.js']),
          uglify(),
          concat('launch.min.js'),          
          gulp.dest('dist/min')
    ],
      cb
    );
});

gulp.task('minify:js:launch:views:concat', function () {
    return gulp.src(['wwwroot/launch/templates/**/*.html', 'wwwroot/launch/views/**/*.html'])
      .pipe(htmlToJsCompiler({ concat: 'launch.templates.min.js', prefix: 'templates/launch', global: 'window.TemplatesLaunch' }))
      .pipe(gulp.dest('minifiedTemplates/'));
});


gulp.task('default:watch:launch', function () {
    gulp.watch(['wwwroot/launch/templates/**/*.html', 'wwwroot/launch/views/**/*.html', 'wwwroot/launch/**/*.js'], ['minify:js:launch', 'minify:js:launch:views:concat']);
});


/*
 * HOST RELATED MINIFIED FILES
 */

gulp.task('minify:js:host', ['minify:js:host:views:concat'], function (cb) {
    pump([
          gulp.src(['minifiedTemplates/host.templates.min.js', 'wwwroot/host/**/*.js']),
          uglify(),
          concat('host.min.js'),          
          gulp.dest('dist/min')
    ],
      cb
    );
});

gulp.task('minify:js:host:views:concat', function () {
    return gulp.src(['wwwroot/host/templates/**/*.html', 'wwwroot/host/views/**/*.html'])
      .pipe(htmlToJsCompiler({ concat: 'host.templates.min.js', prefix: 'templates/host', global: 'window.TemplatesHost' }))
      .pipe(gulp.dest('minifiedTemplates/'));
});


gulp.task('default:watch:host', function () {
    gulp.watch(['wwwroot/host/templates/**/*.html', 'wwwroot/host/views/**/*.html', 'wwwroot/host/**/*.js'], ['minify:js:host', 'minify:js:host:views:concat']);
});

/*
 * multihost-card-ng1 minified files
 */

gulp.task('minify:js:multihost-card-ng1', ['minify:js:multihost-card-ng1:views:concat'], function (cb) {
    pump([
          gulp.src([
              'minifiedTemplates/multihost-card-ng1.templates.min.js',
              'wwwroot/multihost-card-ng1/controllers/*.js',
              'wwwroot/multihost-card-ng1/directives/*.js',
              'wwwroot/multihost-card-ng1/services/*.js',
              'wwwroot/multihost-card-ng1/configs/*.js',
          ]),
          uglify(),
          concat('multihost-card-ng1.min.js'),          
          gulp.dest('dist/min')
    ],
      cb
    );
});

gulp.task('minify:js:multihost-card-ng1:views:concat', function () {
    return gulp.src(['wwwroot/multihost-card-ng1/templates/**/*.html', 'wwwroot/multihost-card-ng1/views/**/*.html'])
      .pipe(htmlToJsCompiler({ concat: 'multihost-card-ng1.templates.min.js', prefix: 'templates/multihost-card-ng1', global: 'window.TemplatesMultiHostNg1' }))
      .pipe(gulp.dest('minifiedTemplates/'));
});


gulp.task('default:watch:multihost-card-ng1', function () {
    gulp.watch(['wwwroot/multihost-card-ng1/templates/**/*.html', 'wwwroot/multihost-card-ng1/views/**/*.html', 'wwwroot/multihost-card-ng1/**/*.js'], ['minify:js:multihost-card-ng1', 'minify:js:multihost-card-ng1:views:concat']);
});


/*
 * multihost-card-ng2 minified files
 */

gulp.task('minify:js:multihost-card-ng2', ['minify:js:multihost-card-ng2:views:concat'], function (cb) {
    pump([
          gulp.src([
              'minifiedTemplates/multihost-card-ng2.templates.min.js',
              'wwwroot/multihost-card-ng2/components/*.js',
              'wwwroot/multihost-card-ng2/directives/*.js',
              'wwwroot/multihost-card-ng2/services/*.js',
              'wwwroot/multihost-card-ng2/modules/*.js',
          ]),
          uglify(),
          concat('multihost-card-ng2.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

gulp.task('minify:js:multihost-card-ng2:views:concat', function () {
    return gulp.src(['wwwroot/multihost-card-ng2/templates/**/*.html', 'wwwroot/multihost-card-ng2/views/**/*.html'])
      .pipe(htmlToJsCompiler({ concat: 'multihost-card-ng2.templates.min.js', prefix: 'templates/multihost-card-ng2', global: 'window.TemplatesMultihostCardNg2' }))
      .pipe(gulp.dest('minifiedTemplates/'));
});


gulp.task('default:watch:multihost-card-ng2', function () {
    gulp.watch(['wwwroot/multihost-card-ng2/templates/**/*.html', 'wwwroot/multihost-card-ng2/views/**/*.html', 'wwwroot/multihost-card-ng2/**/*.js'], ['minify:js:multihost-card-ng2', 'minify:js:multihost-card-ng2:views:concat']);
});

/*
 * multihost-card REACT FILES
 */

gulp.task("babel:js:multihost-card-react", function (cb) {
    pump([
          gulp.src([
              'wwwroot/multihost-card-react/**/*.jsx',              
          ]),
          babel({
              "presets": ["react", "es2015", "stage-2"],
          }),
          concat('multihost-card-react-babel.js'),
          gulp.dest('wwwroot/multihost-card-react/babelled')
    ],
      cb
    );   
});

gulp.task('minify:js:multihost-card-react', ['babel:js:multihost-card-react'], function (cb) {
    pump([
          gulp.src([
              'wwwroot/multihost-card-react/**/*.js'
          ]),
          uglify(),
          concat('multihost-card-react.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

gulp.task('default:watch:multihost-card-react', function () {
    gulp.watch([
        'wwwroot/multihost-card-react/templates/**/*.html',
        'wwwroot/multihost-card-react/views/**/*.html',
        'wwwroot/multihost-card-react/**/*.js',
        'wwwroot/multihost-card-react/**/*.jsx'
    ], ['minify:js:multihost-card-react']);
});

/*
 * multihost-card MITHRIL FILES
 */

gulp.task("babel:js:multihost-card-mithril", function (cb) {
    pump([
          gulp.src([
              'wwwroot/multihost-card-mithril/**/*.jsx',
          ]),
          babel({
              "presets": ["es2015", "stage-2"],
              "plugins": ["mjsx"]
          }),
          concat('multihost-card-mithril-babel.js'),
          gulp.dest('wwwroot/multihost-card-mithril/babelled')
    ],
      cb
    );
});

gulp.task('minify:js:multihost-card-mithril', ['babel:js:multihost-card-mithril'], function (cb) {
    pump([
          gulp.src([
              'wwwroot/multihost-card-mithril/**/*.js'
          ]),
          uglify(),
          concat('multihost-card-mithril.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

gulp.task('default:watch:multihost-card-mithril', function () {
    gulp.watch([
        'wwwroot/multihost-card-mithril/templates/**/*.html',
        'wwwroot/multihost-card-mithril/views/**/*.html',
        'wwwroot/multihost-card-mithril/**/*.js',
        'wwwroot/multihost-card-mithril/**/*.jsx'
    ], ['minify:js:multihost-card-mithril']);
});

/*
 * multihost-card VUE FILES
 */

gulp.task("babel:js:multihost-card-vue", function (cb) {
    pump([
          gulp.src([
              'wwwroot/multihost-card-vue/**/*.jsx',
          ]),
          babel({
              "presets": ["es2015"],
              "plugins": ["transform-vue-jsx"]
          }),
          concat('multihost-card-vue-babel.js'),
          gulp.dest('wwwroot/multihost-card-vue/babelled')
    ],
      cb
    );
});

gulp.task('minify:js:multihost-card-vue', ['babel:js:multihost-card-vue'], function (cb) {
    pump([
          gulp.src([
              'wwwroot/multihost-card-vue/**/*.js'
          ]),
          uglify(),
          concat('multihost-card-vue.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

gulp.task('default:watch:multihost-card-vue', function () {
    gulp.watch([        
        'wwwroot/multihost-card-vue/**/*.jsx'
    ], ['minify:js:multihost-card-vue']);
});