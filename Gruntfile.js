module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configuration des tâches grunt

    });

    // Les tâches sont enregistrées ici
    grunt.initConfig({
        autoprefixer: {
            options: {
                    // Task-specific options go here.
            },
            no_dest: {
                src: 'css/main.css' // globbing is also possible here
            },
        },
    })
    
    grunt.loadNpmTasks('grunt-autoprefixer');

};
