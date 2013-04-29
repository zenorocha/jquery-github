module.exports = function(grunt) {

	grunt.initConfig({

		// Meta informations
		pkg: '<json:package.json>',
		meta: {
			banner: '/*\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.homepage %>\n\n' +
				' *  Copyright (c) <%= grunt.template.today("yyyy") %>\n' +
				' *  MIT License\n' +
				' */'
			},
		concat: {
			dist: {
				src: ['<banner:meta.banner>', '<file_strip_banner:src/jquery.github.js>'],
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
		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
				dest: 'dist/jquery.github.min.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'min', 'concat']);
	grunt.registerTask('travis', ['jshint']);

};
