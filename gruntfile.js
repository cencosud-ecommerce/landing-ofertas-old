module.exports = function (grunt) {
	// body...
	grunt.initConfig({
		stylus:{
			compile: {
				options: {
					compress: true,
					sourcemap: {
						comment:true,
						inline: true,
						sourceRoot: ".",
						basePath:"."
					}
				},
				files: {
					'css/main.css' : 'stylus/core/main.styl',
					'css/other-styles.css' : 'stylus/other-styles.styl',
				}
			}
		},
		uglify: {
			options: {
				mangle: ['jQuery','$','each']
			},
			my_target: {
				options: {
					sourceMap: true,
					sourceMapName : 'js/app.map',
					beautify: false
				},
				files: [{
					'js/app.min.js': [
						'js/main.js'
					]
				}]
			}
		},
		watch: {
			css: {
				files: ['stylus/**/*.styl',
						'stylus/*.styl'],
				tasks: ['stylus'],
				options: {
					livereload: true
				}
			},
			js : {
				files: ['js/main.js'],
				tasks: ['uglify']
			}
		}
	});
 
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.registerTask('default', ['watch']);
}