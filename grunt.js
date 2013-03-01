module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['jquery.github.js']
    }
  });

  grunt.registerTask('default', 'lint');
  grunt.registerTask('travis', 'lint');

};