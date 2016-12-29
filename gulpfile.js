var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),

	//CSS/LESS/IMG
	less = require('gulp-less'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	spritesmith = require('gulp.spritesmith'),
	imagemin = require('gulp-imagemin'),
	//js
	sourcemaps = require('gulp-sourcemaps'),
	jshint = require('gulp-jshint'),

	//版本号、HTML压缩、数据清理
	rev = require('gulp-rev'),
	revReplace = require("gulp-rev-replace"),
	htmlmin = require('gulp-htmlmin'),
	clean = require('gulp-clean'),

	//同步
	runSequence = require('run-sequence'),
	connect = require('gulp-connect');

var DEST = {
		css: './dist/assets/css',
		js: './dist/assets/js',
		img: './dist/assets/img',
		manifest: './src',
		build: './dist/assets'
	},
	SRC = {
		css: './src/assets/css',
		js: './src/assets/js',
		img: './src/assets/img',
		imgDest: './develop/assets/img',
		cssDest: './develop/assets/css',
		jsDest: './develop/assets/js',
		contentDest: './develop',
		jsDevelop: './develop/assets/publish',
		less: './src/less'
	};

/**
 * 文件复制
 */
gulp.task('copyjs', function() {
	return gulp.src(DEST.css + '/*.js')
		.pipe(gulp.dest(DEST.js));
});

gulp.task('copyimg', function() {
	gulp.src(SRC.less + '/*.png')
		.pipe(gulp.dest(SRC.cssDest));

	gulp.src(SRC.less + '/*.png')
		.pipe(gulp.dest(DEST.css));

	gulp.src(DEST.img + '/*.*')
		.pipe(gulp.dest(SRC.imgDest))
		.pipe(connect.reload());
});

gulp.task('copyhtml', function() {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest(SRC.contentDest))
		.pipe(connect.reload());
});

gulp.task('less', function() {

	console.log('(1/4)正在编译less文件...');

	return gulp.src(['src/less/*.less', '!src/less/sprite.less'])
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'Android >= 4.0'],
			cascade: true, //是否美化属性值 默认：true 像这样：
			remove: true //是否去掉不必要的前缀 默认：true
		}))
		.pipe(gulp.dest(SRC.css));
});

//合并css文件
gulp.task('css', function() {
	console.log('(1.5/4)正在组合CSS文件...');
	return gulp.src(SRC.css + '/*.css')
		.pipe(cleanCSS({
			advanced: false,
			compatibility: 'ie7',
			keepBreaks: false
		}))
		.pipe(concat('index' + '.css'))
		.pipe(gulp.dest(SRC.cssDest))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	return gulp.src(SRC.js + '/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(sourcemaps.init()) //生成sourcemap
		.pipe(uglify()) //压缩
		.pipe(jshint()) // 对这些更改过的文件做一些特殊的处理...
		//.pipe(header('(function () {')) // 比如 jshinting ^^^
		//.pipe(footer('})();')) // 增加一些类似模块封装的东西
		.pipe(concat('index.js'))
		.pipe(gulp.dest(SRC.jsDevelop)) //正式发布，无sourceMap
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(SRC.jsDest)) //开发测试期间，有sourceMap
		.pipe(connect.reload());
});

gulp.task("clean", function() {
	return gulp.src(DEST.build)
		.pipe(clean());
});

gulp.task("revision", function() {
	console.log('(3/4)版本号处理...');
	return gulp.src([SRC.cssDest + "/*.css", SRC.jsDevelop + "/*.js"])
		.pipe(rev())
		.pipe(gulp.dest(DEST.css))
		.pipe(rev.manifest())
		.pipe(gulp.dest(DEST.manifest));
});

gulp.task('handlejs', ['copyjs'], function() {
	return gulp.src(DEST.css + '/*.js')
		.pipe(clean());
});

gulp.task('img', function() {
	return gulp.src(SRC.img + '/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest(DEST.img));
});

gulp.task('sprite', function() {
	return gulp.src(SRC.img + '/*.png')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.less',
			cssFormat: 'less'
		}))
		.pipe(gulp.dest(SRC.less));
});

gulp.task("revreplace", function() {
	console.log('(4/4)html压缩...');
	var manifest = gulp.src(DEST.manifest + "/rev-manifest.json");
	var options = {
		removeComments: true, //清除HTML注释
		collapseWhitespace: true, //压缩HTML
		collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
		removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
		minifyJS: true, //压缩页面JS
		minifyCSS: true //压缩页面CSS
	};

	return gulp.src("src/index.html")
		.pipe(revReplace({
			manifest: manifest
		}))
		.pipe(htmlmin(options))
		.pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
	connect.server({
		root: 'develop',
		port: 8000,
		livereload: true
	});
});

//开发环境监测
gulp.task('watch', function() {
	gulp.watch(['./src/*.html'], ['copyhtml']);
	gulp.watch(['./src/assets/**/*.js'], ['js']);
	gulp.watch(['./src/less/*.less'], function() {
		runSequence('less', 'css');
	});
	gulp.watch(['./src/assets/**/*.jpg', './src/assets/**/*.png', './src/assets/**/*.svg'], function() {
		runSequence('img', 'copyimg');
	});
	gulp.watch(['./src/assets/**/*.css'], ['css']);
});

gulp.task('default', function(callback) {
	runSequence('clean', 'sprite', 'less', ['img', 'css', 'js'], 'revision', ['revreplace', 'handlejs', 'copyimg', 'copyhtml']);
});

gulp.task('dev', function(callback) {
	runSequence('connect', 'watch');
});