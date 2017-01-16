// 플러그인 인클루드
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyhtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var stripDebug = require('gulp-strip-debug');
var watch = require('gulp-watch');
var refresh = require('gulp-refresh');
var	logger = require('gulp-logger');
var jshint = require("gulp-jshint");
var header = require('gulp-header');

// 경로 설정
var SRC = 'public/src';
var DIST = 'public/dist';



// using data from package.json 
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * ',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' * ',
  ' * Copyright © 2010-2017 SK Holdings. All rights reserved.',
  ' */',
  ''].join('\n');


// concat 정의 시작
gulp.task('concat-testscript_target', function () {
	console.log("@@@@@@@@@@@@@@@@@@@@ concat-testscript_target");
	// 순서 보장을 위해 배열로 풀어서 나열
	return gulp.src([
		// homepage/dev-js
		SRC + '/testscript/target/homepage/dev-js/databind_md.js',
		SRC + '/testscript/target/homepage/dev-js/maskedinput_md.js',
		SRC + '/testscript/target/homepage/dev-js/navigation_md.js',
		SRC + '/testscript/target/homepage/dev-js/page_md.js',
		SRC + '/testscript/target/homepage/dev-js/popup_md.js',
		SRC + '/testscript/target/homepage/dev-js/progress_md.js',
		SRC + '/testscript/target/homepage/dev-js/request_md.js',
		SRC + '/testscript/target/homepage/dev-js/setup_md.js',
		SRC + '/testscript/target/homepage/dev-js/storage_md.js',
		SRC + '/testscript/target/homepage/dev-js/validator_md.js',
		SRC + '/testscript/target/homepage/dev-js/convert_md.js',
		// homepage/dev-component
		SRC + '/testscript/target/homepage/dev-component/accordion_md.js',
		SRC + '/testscript/target/homepage/dev-component/autocomplete_md.js',
		SRC + '/testscript/target/homepage/dev-component/button_md.js',
		SRC + '/testscript/target/homepage/dev-component/carousel_md.js',
		SRC + '/testscript/target/homepage/dev-component/checkbox_md.js',
		SRC + '/testscript/target/homepage/dev-component/dateinput_md.js',
		SRC + '/testscript/target/homepage/dev-component/datepicker_md.js',
		SRC + '/testscript/target/homepage/dev-component/daterange_md.js',
		SRC + '/testscript/target/homepage/dev-component/dialog_md.js',
		// testpage/components
		SRC + '/testscript/target/testpage/components/tabs_testpage.js',	
		])
	// 성능 이슈로 일단 주석 처리
    // .pipe(logger({
    //         before: 'Starting concat-testscript_target...',
    //         after: 'Finished concat-testscript_target!',
    //         // extname: '.js',
    //         // showChange: true
    //     }))
    // .pipe(jshint()) // 성능 이슈로 일단 주석 처리
	.pipe(stripDebug())
	.pipe(header(banner, { pkg : pkg } ))
	.pipe(concat('content.js'))
	.pipe(gulp.dest(SRC + '/testscript'))
	.pipe(refresh())
	;
});

gulp.task('concat-all', function () {
	console.log("@@@@@@@@@@@@@@@@@@@@ concat-all");
	return gulp.src([
		SRC + '/testscript/copyright.js',
		SRC + '/testscript/header.js',
		SRC + '/testscript/content.js',
		SRC + '/testscript/footer.js',
		])
    // .pipe(logger({
    //         before: 'Starting all...',
    //         after: 'Finished all!',
    //         // extname: '.js',
    //         // showChange: true
    //     }))
	// .pipe(stripDebug())
	.pipe(concat('alopextest.js'))
	.pipe(gulp.dest(DIST))
	.pipe(refresh())
	;
});


// task
gulp.task('concat-copyright', function () {
    gulp.src(SRC + '/testscript/copyright.js') // path to your files
    .pipe(concat('concat-copyright.js')) // concat and name it "concat-copyright.js"
    .pipe(headertasks_watch(getCopyright()))
    .pipe(gulp.dest('path/to/destination'));
});

gulp.task('concat', ['concat-testscript_target', 'concat-all']);

// concat 정의 끝


// copy 정의 시작

gulp.task('copy-selenium-ide', function () {
	console.log("@@@@@@@@@@@@@@@@@@@@ copy-selenium-ide");
	return gulp.src(SRC + '/util/selenium-ide.js')
	.pipe(stripDebug())
	.pipe(concat('selenium-ide.js'))
	.pipe(gulp.dest(DIST + '/script'))
	.pipe(refresh())
	;
});


gulp.task('watch', function(){
	return gulp.watch(SRC + '/testscript/**/*', { ignoreInitial: true }, tasks_watch);
});


gulp.task('copy', ['copy-selenium-ide']);

// copy 정의 끝

var tasks_watch = ['concat', 'copy'];
var tasks_dev = ['concat', 'copy', 'watch'];
var tasks_build = ['concat', 'copy'];

// // user command
gulp.task('dev', tasks_dev);
gulp.task('build', tasks_build);

function getAllArguments(){
	var cnt = 0;
	while(arguments[cnt]){
		console.log(arguments[cnt]);
		cnt++;
	}
}