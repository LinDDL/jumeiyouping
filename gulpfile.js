// gulp 的插件;

// 1. http插件; (服务器插件);
// gulp connect;
const gulp = require("gulp");
// gulp 服务器插件;
const connect = require("gulp-connect");
// gulp 合并插件;
var concat = require('gulp-concat');
// gulp 压缩插件;
var uglify = require("gulp-uglify");
// babel 插件;
var babel = require("gulp-babel");
// css 插件;
var cleanCss = require("gulp-clean-css");
// sass 编译插件;
var sass = require("gulp-sass-china");


gulp.task('connect', function() {
    connect.server({
        port:8001,
        root:"dist/",
        livereload:true,
        // 中间件;
        middleware:function(connect , opt){
            var Proxy = require('gulp-connect-proxy');
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    })
});
gulp.task("html", ()=>{
    return gulp.src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());;
})

gulp.task("watch", ()=>{
    gulp.watch("*.html",["html","sass"]);
    gulp.watch("sass/*.scss",["html","sass"]);
    gulp.watch("images/*.*",["images"]);
    gulp.watch("script/*.js",["html","script"]);
    gulp.watch("styles/*.css",["html","css"]);
})

gulp.task("default",["watch","connect"]);

// script 转存指令;
gulp.task("es6",()=>{
    return gulp.src(["es6/*.js"])
    .pipe(babel(
    //     {
    //     presets: ['@babel/env']
    // }
    ))
    .pipe(gulp.dest("dist/es6"));
})
gulp.task("script", ()=>{
    return gulp.src(["script/*.js","!script/swiper.js","!script/tab_box.js","!script/today_now.js","!script/jumei_login_focus.js","!script/jumei_login_more.js","!script/jumei_login_success.js"])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/script"));
})
gulp.task("script", ()=>{
    return gulp.src(["script/jumei_login_focus.js","script/jumei_login_more.js","!script/jumei_login_success.js"])
    .pipe(concat("login.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/script"));
})
gulp.task("styles", ()=>{
    return gulp.src(["styles/*.css"])
    .pipe(gulp.dest("dist/css"));
})
gulp.task("images", ()=>{
    return gulp.src(["images/*.*"])
    .pipe(gulp.dest("dist/images"));
})
gulp.task("css", ()=>{
    return gulp.src(["styles/*.css"])
           .pipe(cleanCss())
           .pipe(gulp.dest("dist/css"))
})

gulp.task("sass", () =>{
    return gulp.src(["sass/*.scss","!sass/login.sass","!sass/res.scss"])
           .pipe(sass().on("error",sass.logError))
           .pipe(gulp.dest("dist/css"))
})
gulp.task("sass", () =>{
    return gulp.src(["sass/login.scss"])
           .pipe(sass().on("error",sass.logError))
           .pipe(gulp.dest("dist/css"))
})
gulp.task("sass", () =>{
    return gulp.src(["sass/res.scss"])
           .pipe(sass().on("error",sass.logError))
           .pipe(gulp.dest("dist/css"))
})


