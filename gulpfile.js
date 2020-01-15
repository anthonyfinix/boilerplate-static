const {src, dest, watch,series } = require('gulp');
const sass  = require('gulp-sass');
const concat  = require('gulp-concat');

function build(){
    return src(['./src/*.html','./src/assets/**/*.js','./src/assets/**/*.css','!./src/assets/scripts/*.js','!./src/assets/styles/*.scss'])
    .pipe(dest('./dist'))
}
function dev(){
    // converting sass file
    watch('./src/assets/scripts/',series(scripts))
    watch('./src/assets/styles/',series(styles))
}
function styles(){
    // converting sass file
    return src('src/assets/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/assets/css'))
}
function scripts(){
    // converting sass file
    return src('src/assets/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(dest('src/assets/js'))
}

exports.dev = dev;
exports.scripts = scripts;
exports.styles = styles;
exports.build = build;