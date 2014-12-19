module.exports = function(grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        lib_files: {

            core: [
                'src/<%= pkg.name %>.js'
            ],
            css:  [
                'src/style/<%= pkg.name %>.css'
            ]
        },

        copy: {
          dist: {
              expand: true,
              cwd: 'src',
              src: ['**'],
              dest: 'dist/<%= pkg.name %>/'

          }

        },

        clean: ["dist"],

        watch: {

            scripts: {
                files: ['gruntfile.js', '<%= lib_files.core %>', '<%= lib_files.test %>'],
                tasks: ['jshint:all', 'karma:unit']
            },

            livereload: {
                options: {
                    livereload: true
                },
                files: ['src/**/*.*'],
                tasks: ['jshint', 'karma:unit']
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },

            all: ['Gruntfile.js', '<%= lib_files.core %>']
        },


        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/angular-superbox/<%= pkg.name %>.min.js'
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Default task(s).
    grunt.registerTask('default', ['jshint:all']);

    grunt.registerTask('build', function() {
        grunt.task.run(['clean', 'default', 'copy',  'uglify', 'copy']);
    });

};