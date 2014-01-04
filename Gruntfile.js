module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        parallel: {
            assets: {
                options: {
                    grunt: true
                },
                tasks: ['less', 'watch'/*, 'connect:server'*/]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'www',
                    keepalive: true,
                  //  livereload: true
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "www/style/main.css": "less/main.less"
                }
            }
        },
        watch: {
            css: {
                files: '**/*.less',
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-parallel');

    // Default task(s).
    grunt.registerTask('default',['parallel']);

};