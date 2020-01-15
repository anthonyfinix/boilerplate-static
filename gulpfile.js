const {parallel, series, src, dest, watch } = require('gulp');
const sass  = require('gulp-sass');

function build(){
    
}
function dev(){
    console.log('Watching files...')
    watch('src/assets/styles/*.scss',style);
}
function style(){
    // converting sass file
    return src('src/assets/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/assets/css'))
}

exports.style = style;
exports.build = build;
exports.dev = dev;