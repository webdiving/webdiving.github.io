module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configuration des tâches grunt

    });

    // Les tâches sont enregistrées ici
    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    'css/main.css': 'css/main.scss'      // 'destination': 'source'
                }
            }
        },

        autoprefixer: {
            no_dest: {
                src: 'css/main.css' // globbing is also possible here
            },
        },

        watch: {
            dist: {
                files: ['css/main.scss'],
                task: ['default'],
                options: {
                    spawn: false
                }
            },
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'autoprefixer']);
    
};
