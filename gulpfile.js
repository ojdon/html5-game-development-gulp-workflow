//All the Gulp tasks and dependencies
var gulp = require('gulp'),
zip = require('gulp-zip'),
watch = require('gulp-watch'),
jshint = require('gulp-jshint'),
gp_concat = require('gulp-concat'),
gp_uglify = require('gulp-uglify'),
imageop = require('gulp-image-optimization'),
minifyHTML = require('gulp-minify-html'),
rename = require('gulp-rename'),
runSequence = require('run-sequence');

//All your paths for JS, HTML and Image files
var zip_files = ['game.js', 'index.html'], //Files to be added to the zip folder use "<directory goes here>/*" for all files inside the directory
	js_files = ['js/main.js', 'scenes/*'], //All your JS files to be combined and minified
	img_files = ['assets/*.png','assets/*.jpg','src/**/*.gif','assets/*.jpeg'];

//Zip up the JS/HTML required for the game
gulp.task('zip', function () {
    return gulp.src(zip_files, {base: "."})
        .pipe(zip('release.zip'))
        .pipe(gulp.dest('build'));
});


//Run this task once the game is ready to ship!
gulp.task('publish', function() {
	runSequence('build-js', 'build-html', 'zip');
});

//Compress Images
gulp.task('images', function(cb) {
    gulp.src(img_files).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('assets')).on('end', cb).on('error', cb);
});

//Minify the HTML
gulp.task('build-html', function() { 
  return gulp.src('./index.unmin.html')
    .pipe(minifyHTML())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});

//Build the JS and minify
gulp.task('build-js', function() {
	return gulp.src(js_files)
		.pipe(jshint())
		.pipe(jshint.reporter('default')) //Report on errors found by jshint
		.pipe(gp_uglify()) //Minify JS
		.pipe(gp_concat('game.js')) //Merge all the JS files into one game.js file 
		.pipe(gulp.dest('./'));
});

//Build the JS without minifying
gulp.task('build-dev', function() {
	return gulp.src(js_files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gp_concat('game.js'))
		.pipe(gulp.dest('./'));
});

//Watch for any JS or HTML file changes
gulp.task('watch', function () {
	watch(js_files, function () {
		runSequence('build-dev');
	});

	watch('./index.unmin.html', function () {
		runSequence('build-html');
	});
});
