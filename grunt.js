module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['jquery.github.js']
    },
    jshint: {
      options: {
        multistr: true
      }
    }
  });

  grunt.registerTask('default', 'lint');
  grunt.registerTask('travis', 'lint');

};