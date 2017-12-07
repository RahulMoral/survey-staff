'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var livereload   = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer({
			browsers: ['last 52 versions'],
			cascade:  false
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('watch-sass', function(){
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch-sass']);