'use strict';
module.exports = function(grunt) {
  // Requires
  require('load-grunt-tasks')(grunt);

  // Init Grunt object
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json')
  });

  // Styles
  grunt.config.merge({
    autoprefixer: {
      dist: {
        files: {
          'dist/css/style.css': 'css/style.css'
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false
        }
      }
    }
  });

  // JavaScript
  grunt.config.merge({
    concat: {
      dist: {
        options: {
          separator: ';'
        },
        src: ['js/*.js'],
        dest: 'js/concat/concat.js',
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      build: {
        src: 'js/concat/concat.js',
        dest: 'dist/js/main.js'
      }
    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: '**/*.js',
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Register Tasks
  grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify', 'watch']);
};
