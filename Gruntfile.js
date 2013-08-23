module.exports = function(grunt) {
    grunt.initConfig({
       sass: {                                 
            dist: {                             
                files: {
                    'dist/affects.css': 'sass/affects.scss'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};
