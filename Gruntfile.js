module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    lib_files: {

      core: [
        'src/<%= pkg.name %>.js'
      ],
      css: [
        'src/style/<%= pkg.name %>.css'
      ]
    },

    concat: {
      dist: {
        src: ['<%= lib_files.core %>', 'gen/angular-superbox.tpl.js'],
        dest: 'dist/angular-superbox.js'
      }
    },

    copy: {
      css: {
        src: ['<%= lib_files.css %>'],
        dest: 'dist/angular-superbox.css'
      }
    },

    ngtemplates: {
      app: {
        options: {
          module: 'superbox',
          prefix: 'templates/superbox'
        },
        cwd: 'src/partials',
        src: ['superbox.html', 'superbox-list.html'],
        dest: 'gen/angular-superbox.tpl.js'
      }
    },

    clean: ['dist', 'gen'],

    connect: {
      server: {
        options: {
          port: 9001,
          base: ['./'],
          open: 'http://localhost:9001/demo'
        }
      }
    },

    watch: {
      scripts: {
        files: ['Gruntfile.js', '<%= lib_files.core %>'],
        tasks: ['jshint:all', 'dist']
      },

      livereload: {
        options: {
          livereload: true
        },
        files: ['src/**/*.*'],
        tasks: ['jshint', 'copy:css', 'ngtemplates', 'concat:dist']
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
        banner: '/*! <%= pkg.name %> - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/angular-superbox.min.js': 'dist/angular-superbox.js'
        }
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', ['jshint:all']);

  grunt.registerTask('dist', function () {
    grunt.task.run(['clean', 'default', 'copy:css', 'ngtemplates', 'concat:dist', 'uglify:dist']);
  });

  grunt.registerTask('serve', 'start the demo', [
    'default',
    'connect:server',
    'watch:livereload']);

};