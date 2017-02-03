/**
 * Created by Administrator on 2017/2/3.
 */
var _gulp = require("gulp");
var _gulpmincss = require("gulp-minify-css");
_gulp.task("cssmin",function(){
    _gulp.src("./css/*.css")
        .pipe(_gulpmincss())
        .pipe(_gulp.dest("./disk/css"))
});
