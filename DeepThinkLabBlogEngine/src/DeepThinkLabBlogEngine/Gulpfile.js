/// <binding BeforeBuild='copy' Clean='clean' />
var gulp = require('gulp'),
    del = require('del'),
    fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    bower: "./bower_components/",
    lib: "./" + project.webroot + "/lib/"
};

gulp.task('copy', ['clean'], function () {
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}"
    }

    for (var destinationDir in bower) {
        console.log("Source: " + paths.bower + bower[destinationDir]);
        console.log("Destination: " + paths.lib + destinationDir);
        gulp.src(paths.bower + bower[destinationDir])
      .pipe(gulp.dest(paths.lib + destinationDir));
    }
});

gulp.task('clean', function (cb) {
    del([paths.lib], cb);
});