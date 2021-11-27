

const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const gulp = require("gulp");
const babel = require("gulp-babel");
/*const purgecss = require('gulp-purgecss')*/

// js later. alligator...
function buildJavascript() {
    return src("js/**/*.js")
        .pipe(babel({
            presets: ["@babel/env"]       //["@babel/preset-env"]
        }))
        .pipe(dest("dist/js"));
}


function buildStyles() {                //fra scss til css
    return src('scss/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        //.pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('dist/css'))
}

function watchTask() {
    watch(['API-sandbox/scss/*.scss', 'js/**/*js', '*.html'], series(buildStyles, buildJavascript)); //this later,  potater
    //watch(['NEWSBOX-VAGNQVISTGAARD/scss/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, buildJavascript, watchTask); //also for later....
//exports.default = series(buildStyles, watchTask);






/*function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask; */