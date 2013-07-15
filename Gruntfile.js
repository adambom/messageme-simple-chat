module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:dev']
            },
            js: {
                files: ['web/src/scripts/**/*.js'],
                tasks: ['include']
            },
            templates: {
                files: ['src/templates/**/*.html'],
                tasks: ['templates:dev']
            },
            copy: {
                files: ['web/src/scripts/vendor/**/*'],
                tasks: ['copy']
            }
        },
        copy: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'web/src/scripts/vendor/',
                    src: ['**/*.js'],
                    dest: 'web/public/js/vendor/'
                }]
            }
        },
        less: {
            dev: {
                files: {
                    'public/css/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    yuicompress: true
                },
                files: {
                    'public/css/main.min.css': 'src/styles/main.less'
                }
            }
        },
        templates: {
            dev: {
                options: {
                    namespace: 'SC',
                    prettify: false
                },
                files: {
                    'public/js/templates.js': 'src/templates/**/*.html'
                }
            },
            production: {
                options: {
                    namespace: 'SC',
                    prettify: true
                },
                files: {
                    'build/templates.js': 'web/src/templates/**/*.html'
                }
            }
        },
        scripts: {
            libs: [
                'web/src/scripts/vendor/lodash/lodash-1.3.1.js',
                'web/src/scripts/vendor/backbone/backbone-1.0.0.js'
            ],
            src: [
                'web/src/scripts/templates.js',
                'web/src/scripts/models/cors-model.js',
                'web/src/scripts/models/**/*.js',
                'web/src/scripts/collections/**/*.js',
                'web/src/scripts/views/**/*.js',
                'web/src/scripts/routers/**/*.js',
                'web/src/scripts/**/*.js'
            ]
        },
        concat: {
            production: {
                src: [
                    '<%= scripts.libs %>',
                    'build/templates.js',
                    '<%= scripts.src %>'
                ],
                dest: 'build/main.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            production: {
                files: {
                    'web/public/js/main.min.js': [
                        'build/main.js'
                    ]
                }
            }
        }
    });

    grunt.registerMultiTask('templates', 'Compiles underscore templates', function () {
        var _ = require('lodash');
        var options = this.options({
            separator: grunt.util.linefeed,
            templateSettings: {},
            templateNamespace: 'tmpl'
        });

        function getNamespace(ns) {
            var output = [];
            var curPath = 'App';
            if (ns !== 'App') {
                var nsParts = ns.split('.');
                nsParts.forEach(function(curPart, index) {
                    if (curPart !== 'App') {
                        curPath += '[' + JSON.stringify(curPart) + ']';
                        output.push(curPath + ' = ' + curPath + ' || {};');
                    }
                });
            }

            return {
                namespace: curPath,
                declaration: output.join('\n')
            };
        }

        this.files.forEach(function (f) {
            var namespaces = [];
            var output = f.src.filter(function (path) {
                if (!grunt.file.exists(path)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (path) {
                var src = grunt.file.read(path);
                var parts = path.match(/.+\/(?:template|tmpl)(?:s)?\/(.+).html/i)[1].split('/');
                var ns = _.initial(parts).join('.').replace(/(-.)/g, function () {
                    return arguments[0].substring(1).toUpperCase();
                });
                var name = _.last(parts).replace(/(-.)/g, function () {
                    return arguments[0].substring(1).toUpperCase();
                });
                var nsInfo = getNamespace(_.compact([options.templateNamespace, ns]).join('.'));
                var compiled;

                try {
                    compiled = _.template(src, false, options.templateSettings).source;
                } catch (e) {
                    grunt.log.error(e);
                    grunt.fail.warn('_.template failed to compile in file "' + filepath + '"');
                }

                if (options.prettify) {
                    compiled = compiled.replace(new RegExp('\n', 'g'), '');
                }

                namespaces = [].concat(namespaces, nsInfo.declaration.split('\n'));

                return nsInfo.namespace + '["' + name + '"] = ' + compiled + ';';
            });

            if (output.length < 1) {
                grunt.log.warn('Destination not written because compiled files were empty.');
            } else {
                if (options.templateNamespace !== false) {
                    output.unshift(_.uniq(namespaces).join('\n'));
                }

                output.unshift('(function (App, undefined) {');
                output.push('})( this["' + options.namespace + '"]);');

                grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
                grunt.log.writeln('File "' + f.dest + '" created.');
            }
        });

    });

    // Default task.
    grunt.registerTask('default', ['templates:dev', 'less:dev', 'watch']);
    grunt.registerTask('production', ['copy', 'templates:production', 'concat', 'uglify:production', 'less:production']);
};