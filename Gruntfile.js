module.exports = function(grunt) {

	grunt.initConfig({

		// Meta informations
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.homepage %>\n' +
				' *\n' +
				' *  Copyright (c) <%= grunt.template.today("yyyy") %>\n' +
				' *  MIT License\n' +
				' */\n'
		},
		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: ['src/jquery.github.js'],
				dest: 'dist/jquery.github.js'
			}
		},

		// Lint definitions
		jshint: {
			files: ['src/jquery.github.js'],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			my_target: {
				src: ['dist/jquery.github.js'],
				dest: 'dist/jquery.github.min.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('travis', ['jshint']);

};
