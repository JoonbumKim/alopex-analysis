// COPY TASK 분리
// PATH 별, 세부 TASK 별
// ext, ext-setup >>> .min 만들기


'use strict';
var gulp = require('gulp');
var webserver = require('gulp-webserver');

var GAU = require("./gulp-custom/gulp-alopex-util.js");
// var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
    	port: 9009,
	    fallback: 'view/index.html'
    }));
});
// var SRC = 'src-2.3-theme';
// var DIST = 'dist';
// var HOMEPAGE_23 = '../alopex-ui-homepage/public/2.3';
// var HOMEPAGE_DIST = '../alopex-ui-homepage/public/2.3/dist';
// var isDev = false;

// // 플러그인 인클루드
// var gulp = require('gulp'),
// 	webserver = require('gulp-webserver'),
// 	concat = require('gulp-concat'),
// 	uglify = require('gulp-uglify'),
// 	minifyhtml = require('gulp-minify-html'),
// 	sass = require('gulp-sass'),
// 	livereload = require('gulp-livereload'),
// 	stripDebug = require('gulp-strip-debug'),
// 	watch = require('gulp-watch'),
// 	refresh = require('gulp-refresh'),
// 	logger = require('gulp-logger'),
// 	jshint = require("gulp-jshint"),
// 	header = require('gulp-header'),
// 	shell = require('gulp-shell'),
// 	copy = require('gulp-copy'),
// 	del = require('del'),
// 	gulpsync = require('gulp-sync')(gulp),
// 	runSequence = require('run-sequence').use(gulp),
// 	debug = require('gulp-debug'),
// 	sass = require('gulp-sass'),
// 	rename = require('gulp-rename'),
// 	zip = require('gulp-zip'),
// 	exec = require('gulp-exec'),
// 	argv = require('yargs').argv,
//     gulpif = require('gulp-if'),
// 	pump = require('pump'),
// 	fs = require('fs'),
// 	dateFormat = require('dateformat'),
// 	now = new Date(),
// 	alopexUiInfo = JSON.parse(fs.readFileSync(SRC + '/alopex-ui-info.json')),
// 	releaseNote = JSON.parse(fs.readFileSync(SRC + '/releaseNote.json'));



// var CONFIG = {

// 		BANNER: function(){
// 			var str = '/*\n<%= alopexUiInfo.title || alopexUiInfo.name %> - v<%= releaseNote.currentVersion %> - ' + dateFormat(now, "yyyy-mm-dd");
// 				str += '<%= alopexUiInfo.homepage ? "\\n" + alopexUiInfo.homepage : "" %>';
// 				str += '\nCopyright (c) 2010 - ' + new Date().getFullYear() + ' <%= alopexUiInfo.license.desc %>\n';
// 				str += '*/\n';
// 			return str;
// 		},
// 		PATH: {
// 		    "ui-images": SRC + '/ui/common/images/*',
// 		    "ext-js": SRC + '/extension/alopex-ext*.js',
// 		    "ext-css": SRC + '/extension/alopex-ext*.css',
// 		    "webeditor-all": [
// 		        SRC + '/extension/webeditor/**/*'
// 		    ],
// 		    "chart-all": [
// 				SRC + '/extension/amcharts/**/*',
// 				'!' + SRC + '/extension/amcharts/javascript_chart/sources/', // 부모까지 해줘야 함
// 				'!' + SRC + '/extension/amcharts/javascript_chart/sources/**/*',
// 				'!' + SRC + '/extension/amcharts/javascript_stockchart/sources/', // 부모까지 해줘야 함
// 				'!' + SRC + '/extension/amcharts/javascript_stockchart/sources/**/*',
// 			],
// 		    "dist-alopex-ui-css-old": 'dist-alopex-ui-css-old/**',
// 		    "alopexui-version-zip": [
// 		        DIST + '/zip/alopexui-' + releaseNote.currentVersion + '.zip',
// 		        DIST + '/script/alopex-ui.js'
// 		    ],
// 		    "concat-alopex-ui-js": [
// 		    // 순서 중요
// 		        SRC + '/ui/common/core.js',
// 		        SRC + '/ui/common/keyfilter.js',
// 		        SRC + '/ui/common/object.js',
// 		        SRC + '/ui/common/utils.js',
// 		        SRC + '/ui/common/worker.js',
// 		        SRC + '/ui/widget/**/*.js',
// 		        SRC + '/ui/event/*.js',
// 		        SRC + '/spex/*.js',
// 		        SRC + '/data/*.js',
// 		        SRC + '/validator/*.js'
// 		    ],
// 		    "sass-alopex-ui-common": [
// 		        SRC + '/ui/common/mixin/*.scss',
// 		        SRC + '/ui/common/ui.scss',
// 		        SRC + '/ui/widget/**/*.scss',
// 		        SRC + '/ui/common/helper.scss'
// 		    ],
// 		    "sass-alopex-ui-variables-default": [SRC + '/ui/common/theme_variables/variables-default.scss'],
// 		    "sass-alopex-ui-variables-dark": [SRC + '/ui/common/theme_variables/variables-dark.scss'],
// 		    "sass-alopex-ui-variables-white": [SRC + '/ui/common/theme_variables/variables-white.scss'],
// 		    "sass-alopex-ui-variables-mustard": [SRC + '/ui/common/theme_variables/variables-mustard.scss'],
// 		    "sass-alopex-ui-variables-sk": [SRC + '/ui/common/theme_variables/variables-sk.scss'],
// 		    "sass-alopex-ui-variables-dark-gradation": [SRC + '/ui/common/theme_variables/variables-dark-gradation.scss'],
// 		    "sass-alopex-ui-variables-white-gradation": [SRC + '/ui/common/theme_variables/variables-white-gradation.scss'],
// 		    "uglify-alopex-ui-js": [
// 		    	DIST + '/script/alopex-ui.js'
// 		    ],
// 		    "uglify-ext-js": [
// 		    	DIST + '/script/src/alopex-ext.js',
// 		    	DIST + '/script/src/alopex-ext-setup.js',
// 		    ],
// 		    "uglify-webeditor": [
// 		    	DIST + '/script/src/webeditor/alopex-webeditor-setup.js',
// 		    	DIST + '/script/src/webeditor/alopex-webeditor.js'
// 		    ],
// 		    "zip-alopex-ui": [
// 				DIST + '/script/alopex-ui.min.js',
// 				DIST + '/script/src/alopex-ext*.js',
// 		      	DIST + '/script/src/amcharts/javascript_chart/**/*',
// 		      	DIST + '/script/src/amcharts/javascript_stockchart/**/*',
// 		      	'!' + DIST + '/script/src/amcharts/temp/**',
// 		      	DIST + '/script/src/webeditor/**/*',
// 		      	DIST + '/css/images/**',
// 		      	DIST + '/css/alopex-ui-default.css',
// 		      	DIST + '/css/alopex-ui-dark.css',
// 		      	DIST + '/css/alopex-ui-white.css',
// 		      	DIST + '/css/alopex-ui-mustard.css',
// 		      	DIST + '/css/alopex-ui-sk.css',
// 		      	DIST + '/css/alopex-ui-dark-gradation.css',
// 		      	DIST + '/css/alopex-ui-white-gradation.css',
// 		      	DIST + '/css/src/alopex-ext.css',
// 		      	DIST + '/css/css_old/alopex-ui.css'
// 		    ],
// 		},
// 		EXEC_OPTIONS: {
// 		    continueOnError: false, // default = false, true means don't emit error event 
// 		    pipeStdout: false, // default = false, true means stdout is written to file.contents 
// 		    customTemplatingThing: "test" // content passed to gutil.template() 
// 		},
// 		EXEC_REPORT_OPTIONS: {
// 		  	err: true, // default = true, false means don't write err 
// 		  	stderr: true, // default = true, false means don't write stderr 
// 		  	stdout: true // default = true, false means don't write stdout 
// 		},
// };


// gulp.task('concat-core', function(){
// 	return
// 	pump([
// 	      gulp.src(SRC + "/alopex/**/*.js"),
// 	      gulp.dest(DIST + "/script/alopex-analysis.js")
// 	])
// });

// gulp.task('copy-ui-images', function () {
// 	return gulp
//     .src(CONFIG.PATH["ui-images"])
//     // .pipe(debug({title: 'unicorn:'}))
//     .pipe(gulp.dest(DIST + '/css/images/'));
// });

// gulp.task('clean-dist-all', function () {
// 	del.sync([DIST + '/**/*']);
// });

// gulp.task('copy-ui-images', function () {
// 	return gulp
//     .src(CONFIG.PATH["ui-images"])
//     // .pipe(debug({title: 'unicorn:'}))
//     .pipe(gulp.dest(DIST + '/css/images/'));
// });

// gulp.task('copy-ext-js', function () {
// 	return gulp
//     .src(CONFIG.PATH["ext-js"])
//     .pipe(stripDebug()) // .src에 js 파일만 존재할 때만 실행 .src에 css 있을 땐 에러남
//     .pipe(gulp.dest(DIST + '/script/src/'));
// });

// gulp.task('copy-ext-css', function () {
// 	return gulp
//     .src(CONFIG.PATH["ext-css"])
//     .pipe(gulp.dest(DIST + '/css/src/'));
// });

// gulp.task('copy-webeditor-all', function () {
// 	return pump([
// 				gulp.src(CONFIG.PATH["webeditor-all"]),
// 				// stripDebug(), // .src에 js 파일만 존재할 때만 실행 .src에 css 있을 땐 에러남
// 				gulp.dest(DIST + '/script/src/webeditor')
// 			]);
// });

// gulp.task('copy-chart-all', function () {
// 	return pump([
// 			gulp.src(CONFIG.PATH["chart-all"]),
// 			// stripDebug(), // .src에 js 파일만 존재할 때만 실행 .src에 css 있을 땐 에러남
// 			gulp.dest(DIST + '/script/src/amcharts')
// 		]);
// });

// gulp.task('copy-dist-alopex-ui-css-old', function () {
// 	return pump([
// 			gulp.src(CONFIG.PATH["dist-alopex-ui-css-old"]),
// 			gulp.dest(DIST + '/css', {overwrite: true})
// 		]);
// });

// gulp.task('copy-alopexui-version-zip', function () {
// 	return pump([
// 			gulp.src(CONFIG.PATH["alopexui-version-zip"]),
// 			gulp.dest('version/alopexui-' + releaseNote.currentVersion, {overwrite: true})
// 		]);
// });


// // concat 정의 시작
// gulp.task('concat-alopex-ui-js', function () {
// 	// 순서 보장을 위해 배열로 풀어서 나열
// 	return gulp.src(CONFIG.PATH["concat-alopex-ui-js"])
// 		// 성능 이슈로 일단 주석 처리
// 	    // .pipe(logger({
// 	    //         before: 'Starting concat-testscript_target...',
// 	    //         after: 'Finished concat-testscript_target!',
// 	    //         // extname: '.js',
// 	    //         // showChange: true
// 	    //     }))
// 	    // .pipe(jshint()) // 성능 이슈로 일단 주석 처리
// 		.pipe(stripDebug()) // 운영 배포용 소스에서 logging 코드 제거해주기
// 		.pipe(concat('alopex-ui.js'))
// 		.pipe(header(CONFIG.BANNER(), { alopexUiInfo: alopexUiInfo, releaseNote: releaseNote, isDev: isDev }))
// 		.pipe(gulp.dest(DIST + '/script'))
// 		.pipe(refresh())
// 		;
// });

// // scss 정의 시작

// gulp.task('sass-alopex-ui-theme-default', function () {
// 	gulp.src(CONFIG.PATH["sass-alopex-ui-variables-default"].concat(CONFIG.PATH["sass-alopex-ui-common"]))
// 	.pipe(concat('alopex-ui-default.scss'))
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest(DIST + '/css'));
// });

// gulp.task('sass-alopex-ui-theme-dark', function () {
// 	gulp.src(CONFIG.PATH["sass-alopex-ui-variables-dark"].concat(CONFIG.PATH["sass-alopex-ui-common"]))
// 	.pipe(concat('alopex-ui-dark.scss'))
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest(DIST + '/css'));
// });

// gulp.task('sass-alopex-ui-theme-white', function () {
// 	gulp.src(CONFIG.PATH["sass-alopex-ui-variables-white"].concat(CONFIG.PATH["sass-alopex-ui-common"]))
// 	.pipe(concat('alopex-ui-white.scss'))
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest(DIST + '/css'));
// });

// gulp.task('sass-alopex-ui-theme-mustard', function () {
// 	gulp.src(CONFIG.PATH["sass-alopex-ui-variables-mustard"].concat(CONFIG.PATH["sass-alopex-ui-common"]))
// 	.pipe(concat('alopex-ui-mustard.scss'))
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest(DIST + '/css'));
// });

// gulp.task('sass-alopex-ui-theme-sk', function () {
// 	gulp.src(CONFIG.PATH["sass-alopex-ui-variables-sk"].concat(CONFIG.PATH["sass-alopex-ui-common"]))
// 	.pipe(concat('alopex-ui-sk.scss'))
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest(DIST + '/css'));
// });

// gulp.task('sass-alopex-ui-theme-dark-gradation', function () {
// 	gulp.src(CONFIG.PATH["sass-alopex-ui-variables-dark-gradation"].concat(CONFIG.PATH["sass-alopex-ui-common"]))
// 	.pipe(concat('alopex-ui-dark-gradation.scss'))
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest(DIST + '/css'));
// });

// gulp.task('sass-alopex-ui-theme-white-gradation', function () {
// 	gulp.src(CONFIG.PATH["sass-alopex-ui-variables-white-gradation"].concat(CONFIG.PATH["sass-alopex-ui-common"]))
// 	.pipe(concat('alopex-ui-white-gradation.scss'))
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(gulp.dest(DIST + '/css'));
// });	


// gulp.task('uglify-alopex-ui-js', function (cb) {
//   pump([
//         gulp.src(CONFIG.PATH["uglify-alopex-ui-js"]),
//         uglify({compress: {drop_console: true}}),
//         rename({ suffix: '.min' }),
//         header(CONFIG.BANNER(), { alopexUiInfo: alopexUiInfo, releaseNote: releaseNote, isDev: isDev } ),
//         gulp.dest(DIST + '/script')
//     ],
//     cb
//   );
// });

// gulp.task('uglify-ext-js', function (cb) {
//   pump([
//         gulp.src(CONFIG.PATH["uglify-ext-js"]),
//         uglify({compress: {drop_console: true}}),
//         rename({ suffix: '.min' }),
//         header(CONFIG.BANNER(), { alopexUiInfo: alopexUiInfo, releaseNote: releaseNote, isDev: isDev } ),
//         gulp.dest(DIST + '/script/src')
//     ],
//     cb
//   );
// });

// gulp.task('uglify-webeditor', function (cb) {
//   pump([
//         gulp.src(CONFIG.PATH["uglify-webeditor"]),
//         uglify({compress: {drop_console: true}}),
//         rename({ suffix: '.min' }),
//         header(CONFIG.BANNER(), { alopexUiInfo: alopexUiInfo, releaseNote: releaseNote, isDev: isDev } ),
//         gulp.dest(DIST + '/script/src/webeditor')
//     ],
//     cb
//   );
// });




// gulp.task('zip-alopex-ui', () => {
//     return pump([
//     		gulp.src(CONFIG.PATH["zip-alopex-ui"], {base: DIST}), // DIST 하위 폴더부터 recursively
//     		zip('alopexui-' + releaseNote.currentVersion + '.zip', {compress: true}),
// 			gulp.dest(DIST + '/zip', {overwrite: true})
//     	]);
// });


// // COPY TASK 분리
// // PATH 별, 세부 TASK 별

// // gulp.task('replace-homepage-dist', function() {
// //   var options = {
// //     continueOnError: false, // default = false, true means don't emit error event 
// //     pipeStdout: false, // default = false, true means stdout is written to file.contents 
// //     customTemplatingThing: "test" // content passed to gutil.template() 
// //   };
// //   var reportOptions = {
// //   	err: true, // default = true, false means don't write err 
// //   	stderr: true, // default = true, false means don't write stderr 
// //   	stdout: true // default = true, false means don't write stdout 
// //   }

// //   var From = DIST + '/script/*.js';
// //   var To =
// //   return gulp.src('./package.json', {read: false})
// //     .pipe(exec('cp -r ' + DIST + '/script/ + '' +HOMEPAGE_23 + ';', options))
// //     .pipe(exec.reporter(reportOptions));
// // });

// // css 7
// // ext js ext css

// gulp.task('replace-homepage-dist-all', function() {
//   var From = DIST;
//   var To = HOMEPAGE_23;
//   return gulp.src('./package.json', {read: false})
//     .pipe(exec('cp -r ' + From + ' ' + To + ';', CONFIG.PATH["exec-options"]))
//     .pipe(exec.reporter(CONFIG.PATH["exec-report-options"]));
// });

// gulp.task('replace-homepage-js', function() {
//   var From = DIST + '/script/*.js';
//   var To = HOMEPAGE_23 + '/' + DIST + '/script';
//   return gulp.src('./package.json', {read: false})
//     .pipe(exec('cp -r  '+From+'   '+To+';', CONFIG.PATH["exec-options"]))
//     .pipe(exec.reporter(CONFIG.PATH["exec-report-options"]));
// });

// gulp.task('replace-homepage-editor', function() {
//   var From = DIST + '/script/src/webeditor';
//   var To = HOMEPAGE_23 + '/' + DIST + '/script/src';
//   return gulp.src('./package.json', {read: false})
//     .pipe(exec('cp -r  '+From+'   '+To+';', CONFIG.PATH["exec-options"]))
//     .pipe(exec.reporter(CONFIG.PATH["exec-report-options"]));
// });

// gulp.task('replace-homepage-css', function() {
//   var From = DIST + '/css/*.css';
//   var To = HOMEPAGE_23 + '/' + DIST + '/css';
//   return gulp.src('./package.json', {read: false})
//     .pipe(exec('cp -r  '+From+'   '+To+';', CONFIG.PATH["exec-options"]))
//     .pipe(exec.reporter(CONFIG.PATH["exec-report-options"]));
// });


// // // 파일 변경 감지 및 브라우저 재시작
// // gulp.task('watch', function () {
// // 	livereload.listen();
// // 	gulp.watch(paths.js, ['combine-js']);
// // 	gulp.watch(paths.scss, ['compile-sass']);
// // 	gulp.watch(paths.html, ['compress-html']);
// // 	gulp.watch(dist + '/**').on('change', livereload.changed);
// // });


// gulp.task('watching', function(){
// 	console.log("##########################");
// 	console.log("#####  Watching.....  ####");
// 	console.log("##########################");
// });

// // // 파일 변경 감지 및 브라우저 재시작
// gulp.task('watch-all', function () {
// 	// livereload.listen();
// 	gulp.watch(
// 				[]
// 				.concat(CONFIG.PATH["ui-images"])
// 				.concat(CONFIG.PATH["ext-js"])
// 				.concat(CONFIG.PATH["ext-css"])
// 				.concat(CONFIG.PATH["webeditor-all"])
// 				.concat(CONFIG.PATH["chart-all"])
// 				.concat(CONFIG.PATH["concat-alopex-ui-js"])
// 				.concat(CONFIG.PATH["uglify-alopex-ui-js"])

// 				.concat(CONFIG.PATH["sass-alopex-ui-common"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-default"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-dark"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-white"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-mustard"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-sk"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-dark-gradation"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-white-gradation"])
// 			, 
// 				gulpsync.sync([
// 					// 'clean-dist',
// 					'copy-src',
// 					'concat-src',
// 					'uglify',
// 					'sass',
// 					// 'zip',
// 					// 'version',
// 					'replace-homepage-js',
// 					'replace-homepage-css',
// 				])
// 	)
// 	// .on('change', livereload.changed)
// 	;
// });



// // // 파일 변경 감지 및 브라우저 재시작
// gulp.task('watch-js', function () {
// 	// livereload.listen();
// 	gulp.watch(
// 				[]
// 				// .concat(CONFIG.PATH["ui-images"])
// 				// .concat(CONFIG.PATH["ext-js"])
// 				// .concat(CONFIG.PATH["ext-css"])
// 				// .concat(CONFIG.PATH["webeditor-all"])
// 				// .concat(CONFIG.PATH["chart-all"])
// 				.concat(CONFIG.PATH["concat-alopex-ui-js"])
// 				.concat(CONFIG.PATH["uglify-alopex-ui-js"])

// 				// .concat(CONFIG.PATH["sass-alopex-ui-common"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-default"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-dark"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-white"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-mustard"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-sk"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-dark-gradation"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-white-gradation"])
// 			, 
// 				gulpsync.sync([
// 					// 'clean-dist',
// 					// 'copy-src',
// 					'concat-src',
// 					'uglify-alopex-ui-js',
// 					// 'sass',
// 					// 'zip',
// 					// 'version',
// 					'replace-homepage-js',
// 					// 'replace-homepage-css',
					
// 					'watching'
// 				])
// 	)
// 	// .on('change', livereload.changed)
// 	;
// });

// gulp.task('watch-editor', function () {
// 	// livereload.listen();
// 	gulp.watch(
// 				[]
// 				.concat(CONFIG.PATH["ui-images"])
// 				// .concat(CONFIG.PATH["ext-js"])
// 				// .concat(CONFIG.PATH["ext-css"])
// 				.concat(CONFIG.PATH["webeditor-all"])
// 				// .concat(CONFIG.PATH["chart-all"])
// 				.concat(CONFIG.PATH["concat-alopex-ui-js"])
// 				.concat(CONFIG.PATH["uglify-alopex-ui-js"])

// 				// .concat(CONFIG.PATH["sass-alopex-ui-common"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-default"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-dark"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-white"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-mustard"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-sk"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-dark-gradation"])
// 				// .concat(CONFIG.PATH["sass-alopex-ui-variables-white-gradation"])
// 			, 
// 				gulpsync.sync([
// 					// 'clean-dist',
// 					// 'copy-src',
// 					'copy-webeditor-all',
// 					'concat-src',
// 					'uglify-alopex-ui-js',
// 					// 'sass',
// 					// 'zip',
// 					// 'version',
// 					'replace-homepage-js',
// 					'replace-homepage-editor',
// 					// 'replace-homepage-css',
					
// 					'watching'
// 				])
// 	)
// 	// .on('change', livereload.changed)
// 	;
// });


// gulp.task('watch-css', function () {
// 	// livereload.listen();
// 	gulp.watch(
// 				[]
// 				// .concat(CONFIG.PATH["ui-images"])
// 				// .concat(CONFIG.PATH["ext-js"])
// 				// .concat(CONFIG.PATH["ext-css"])
// 				// .concat(CONFIG.PATH["webeditor-all"])
// 				// .concat(CONFIG.PATH["chart-all"])
// 				// .concat(CONFIG.PATH["concat-alopex-ui-js"])
// 				// .concat(CONFIG.PATH["uglify-alopex-ui-js"])

// 				.concat(CONFIG.PATH["sass-alopex-ui-common"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-default"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-dark"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-white"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-mustard"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-sk"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-dark-gradation"])
// 				.concat(CONFIG.PATH["sass-alopex-ui-variables-white-gradation"])
// 			, 
// 				gulpsync.sync([
// 				// 'clean-dist',
// 					// 'copy-src',
// 					// 'concat-src',
// 					// 'uglify',
// 					'sass',
// 					// 'zip',
// 					// 'version',
// 					// 'replace-homepage-js',
// 					'replace-homepage-css',
// 				])
// 	)
// 	// .on('change', livereload.changed)
// 	;
// });


// gulp.task('clean-dist', 
// 					[
// 						'clean-dist-all'
// 					]
// );


// gulp.task('copy-src', 
// 					gulpsync.sync([
// 						'copy-ui-images', 
// 						'copy-ext-js',
// 						'copy-ext-css', 
// 						'copy-webeditor-all',
// 						'copy-chart-all',
// 						'copy-dist-alopex-ui-css-old'
// 					])
// );

// gulp.task('concat-src', 
// 					gulpsync.sync([
// 						'concat-alopex-ui-js'
// 					])
// );

// gulp.task('sass', 
// 					gulpsync.sync([
// 						'sass-alopex-ui-theme-default',
// 						'sass-alopex-ui-theme-dark',
// 						'sass-alopex-ui-theme-white',
// 						'sass-alopex-ui-theme-mustard',
// 						'sass-alopex-ui-theme-sk',
// 						'sass-alopex-ui-theme-dark-gradation',
// 						'sass-alopex-ui-theme-white-gradation'
// 					])
// );

// gulp.task('uglify', 
// 					gulpsync.sync([
// 						'uglify-alopex-ui-js',
// 						'uglify-ext-js',
// 						'uglify-webeditor'
// 					])
// );

// gulp.task('zip', 
// 					gulpsync.sync([
// 						'zip-alopex-ui'
// 					])
// );

// gulp.task('version', 
// 					gulpsync.sync([
// 						'copy-alopexui-version-zip'
// 					])
// );

// gulp.task('svn', 
// 					gulpsync.sync([
// 						'commit-alopexui-version-zip'
// 					])
// );

// gulp.task('copy-to-homepage', 
// 					gulpsync.sync([
// 						'replace-homepage-dist-all',
// 						// 'replace-homepage-js',
// 						// 'replace-homepage-css',
// 					])
// );



// gulp.task('watch', 
// 					gulpsync.sync([
// 						'watch-all'
// 						// 'watch-js',
// 						// 'watch-css',
// 					])
// );


// ////////////////////////////////////////////////////////////////////////////////
// // 외부 실행 명령어 ////////////////////////////////////////////////////////////////

// gulp.task('dev', 
// 					gulpsync.sync([
// 								// 'clean-dist',
// 								'copy-src',
// 								'concat-src',
// 								'uglify',
// 								'sass',
// 								'zip',
// 								'version',
// 								'copy-to-homepage',
// 								'watch-all'
// 					])
// );

// gulp.task('devjs', 
// 					gulpsync.sync([
// 								// 'clean-dist',
// 								'copy-src',
// 								'concat-src',
// 								'uglify',
// 								'sass',
// 								// 'zip',
// 								// 'version',
// 								'replace-homepage-js',
// 								'watch-js'
// 					])
// );

// gulp.task('deveditor', 
// 					gulpsync.sync([
// 								// 'clean-dist',
// 								'copy-src',
// 								'concat-src',
// 								'uglify',
// 								'sass',
// 								// 'zip',
// 								// 'version',
// 								'replace-homepage-js',
// 								'replace-homepage-editor',
// 								'watch-editor'
// 					])
// );

// gulp.task('devcss', 
// 					gulpsync.sync([
// 								// 'clean-dist',
// 								'copy-src',
// 								'concat-src',
// 								'uglify',
// 								'sass',
// 								// 'zip',
// 								// 'version',
// 								'replace-homepage-css',
// 								'watch-css'
// 					])
// );

// gulp.task('build', 
// 					gulpsync.sync([
// 								// 'clean-dist',
// 								'copy-src',
// 								'concat-src',
// 								'uglify',
// 								'sass',
// 								'zip',
// 								'version',
// 								'copy-to-homepage',
// 								// 'watch-all'
// 					])
// );