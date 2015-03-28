/**
 * Created by Bogdan.Begovic on 9/30/2014.
 */

module.exports = function (grunt) {
    'use strict';
    var optimizedJSOutFileName = 'ToDoApp.js';
    var dateForJsHintReport = new Date();

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            dev: {
                files: ['app/js/**.js', 'app/**.html', 'app/scss/**.scss'],
                options: {
                    livereload: true
                },
                tasks: ['sass:dev']
            },
            build: {
                files: ['app/js/**.js', 'app/**.html', 'app/scss/**.scss'],
                options: {
                    livereload: true
                },
                tasks:['requirejs', 'sass:build']
            }
        },
        connect: {
            dev: {
                options: {
                    port: 12222,
                    base: '',
                    hostname: 'localhost',
                    debug: true,
                    open: 'http://localhost:12222/app/ToDoApp.html',
                    protocol: 'http',
                    livereload: true
                }
            },
            build: {
                options: {
                    port: 12233,
                    base: 'build',
                    hostname: 'localhost',
                    debug: true,
                    open: 'http://localhost:12233/ToDoApp.html',
                    protocol: 'http',
                    livereload: true
                }
            }
        },
        copy: {
            build:{
                files:[
                    {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'], dest: 'build/css'},
                    {expand: true, flatten: true, src: ['bower_components/bootstrap/dist/fonts/**'], dest: 'build/fonts'},
                    {expand: true, flatten: true, src: ['app/ToDoApp.html'], dest: 'build'},
                    {expand: true, flatten: true, src: ['app/fonts/**'], dest: 'build/fonts'},
                    {expand: true, flatten: true, src: ['app/images/**'], dest: 'build/images'}
                ]
            }
        },
        jshint: {
            dev: {
                src: ['Gruntfile.js',
                    'app/js/**/*.js'],
                options: {
                    jshintrc: 'todo.jshintrc',
                    force: true,
                    reporter: 'checkstyle',
                    reporterOutput: 'jsHintErrors/' + dateForJsHintReport.getMonth() + 1 + '.' + dateForJsHintReport.getDate() + '.' + dateForJsHintReport.getFullYear() + '-' + dateForJsHintReport.getHours() + '.' + dateForJsHintReport.getMinutes() + '.' + dateForJsHintReport.getSeconds() + '-error.log.xml'
                }
            }
        },
        clean: {
            build: {
                src: ['build', 'jsHintErrors']
            }
        },
        requirejs: {
            app: {
                options: {
                    baseUrl: 'bower_components',
                    include: ['../app/js/main.js', 'requirejs/require'],
                    paths: {
                        knockout: 'knockout/dist/knockout',
                        bootstrap: 'bootstrap/dist/js/bootstrap.min',
                        jquery: 'jquery/dist/jquery.min',
                        mainToDoViewModel: '../app/js/mainToDoViewModel',
                        toDoList: '../app/js/toDoList',
                        toDoListItem: '../app/js/toDoListItem'
                    },
                    name: '../app/js/main',
                    out: 'build/js/' + optimizedJSOutFileName,
                    findNestedDependencies: true,
                    removeCombined: true,
                    optimize: 'uglify2'
                }
            }
        },
        toggleComments: {
            customOptions: {
                options: {
                    padding: 4,
                    removeCommands: true
                },
                files: {
                    'build/ToDoApp.html': 'build/ToDoApp.html'
                }
            }
        },
        sass: {
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/main.css': 'app/scss/main.scss'
                }
            },
            dev: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'app/css/main.css': 'app/scss/main.scss'
                }
            }
        }
    });

    grunt.registerTask(
        'dev run',
        ['jshint:dev', 'sass:dev', 'connect:dev', 'watch:dev']
    );

    grunt.registerTask(
        'build  run',
        ['build compile', 'connect:build', 'watch:build']
    );

    grunt.registerTask(
        'build compile',
        ['clean project', 'jshint:dev', 'copy:build', 'requirejs', 'sass:build', 'toggleComments']
    );

    grunt.registerTask(
        'clean project',
        ['clean:build']
    );
};
