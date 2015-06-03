module.exports = function (grunt) {
  'use strict';

  require('shelljs/global');

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        sourceMap: true
      },
      dist: {
        src: ['src/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    comments: {
      js: {
        options: {
          singleline: true,
          multiline: true
        },
        src: ['<%= concat.dist.dest %>']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        sourceMap: true
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    jscs: {
      options: {
        config: '.jscs.json',
        files: [
          'Gruntfile.js',
          'src/**/*.js',
          'test/**/*.js'
        ]
      }
    },
    changelog: {
      options: {}
    },
    //Server-side tests
    simplemocha: {
      test: {
        src: 'test/node.js',
        options: {
          globals:     ['should'],
          timeout:     3000,
          ignoreLeaks: false,
          reporter:    'spec'
        }
      }
    },
    // Client-side tests
    mocha: {
      test: {
        src: ['test/browser.html'],
        options: {
          run: true
        }
      }
    },
    githooks: {
      all: {
        'pre-commit': 'pre-commit'
      }
    }
  };

  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('test', ['lint', 'simplemocha']);
  grunt.registerTask('build', ['test', 'concat', 'comments', 'uglify']);
  grunt.registerTask('pre-commit', ['build', 'add-compressed-to-git']);

  // Add compressed and minified files before committing
  grunt.registerTask('add-compressed-to-git', function () {
    exec('git add dist/');
  });

  grunt.registerTask('default', []);
};
