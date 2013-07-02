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

		jasmine: {
			src: 'src/jquery.github.js',
			options: {
				specs: 'spec/*spec.js',
				helpers: 'spec/helpers/*.js',
				vendor: 'lib/jquery.min.js'
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
		},

		// Run JSHint, concat, minify and send it to the dist folder
		// any time a file is added, changed or deleted
		watch: {
			files: ['**/*'],
			tasks: ['jshint', 'concat', 'uglify'],
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('test', ['jshint', 'jasmine']);

};
