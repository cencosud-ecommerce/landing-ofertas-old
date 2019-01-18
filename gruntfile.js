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
					'dist/main-ofd.css' : 'src/stylus/core/main.styl',
					'dist/other-styles.css' : 'src/stylus/other-styles.styl',
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
					sourceMapName : 'dist/main-ofd.map',
					beautify: false
				},
				files: [{
					'dist/main-ofd.js': [
						'src/js/main.js'
					]
				}]
			}
		},
		watch: {
			css: {
				files: ['src/stylus/**/*.styl',
						'src/stylus/*.styl'],
				tasks: ['stylus'],
				options: {
					livereload: true
				}
			},
			js : {
				files: ['src/js/main.js'],
				tasks: ['uglify']
			}
		}
	});
 
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
 
	grunt.registerTask('default', ['watch']);
}