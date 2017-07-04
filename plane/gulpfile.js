var obj = {
	removeComments: true, //清除 HTML 注释
	collapseWhitespace: true, //压缩 HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==><input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的 type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的 type="text/css"
	minifyJS: true, //压缩页面 JS
	minifyCSS: true //压缩页面 CSS
}

var gulp = require("gulp");
var babel = require('gulp-babel');
var uglify = require("gulp-uglify");
gulp.task("jstask",function(){
	gulp.src("js/bullet.js")
	.pipe(babel({presets: ['es2015']}))
	.pipe(uglify())
	.pipe(gulp.dest("destjs"));
});
//gulp.task('default',['jstask']); 


var minify = require("gulp-minify-css");
gulp.task("csstask",function(){
	gulp.src("css/dafeiji.css")
	.pipe(minify())
	.pipe(gulp.dest("destcss"));
});
