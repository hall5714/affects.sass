module.exports = function(grunt) {
    grunt.initConfig({
       sass: {                                 
            dist: {                             
                files: {
                    'dist/affects.css': 'sass/affects.scss'
                }
            }
        },
        cssmin: {
            minify: {
                src: 'dist/affects.css',
                dest: 'dist/affects.min.css'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass', 'cssmin']);
};