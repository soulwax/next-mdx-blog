module.exports = function(grunt) {
  function loadConfig(path) {
    const glob = require('glob');
    const object = {};
    let key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/, '');
      object[key] = require(path + option);
    });

    return object;
  }

  const config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  grunt.util._.extend(config, loadConfig('./tasks/options/'));
  setTimeout(() => {
    grunt.initConfig(config);
  }
  , 0);

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'copy', 'sass', 'uglify']);
  grunt.registerTask('serve', ['build', 'connect', 'watch']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
};