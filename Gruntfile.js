module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      basic_and_extras: {
        files: {
          'www/vendors/js/angular.js': [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-resource/angular-resource.min.js',
            'bower_components/angular-mocks/angular-mocks.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-ui-routes/angular-ui-router.min.js',
          ],
          'www/vendors/js/ionic.js': ['bower_components/ionic/release/js/ionic.bundle.min.js'],
          'www/vendors/css/ionic.css': ['bower_components/ionic/release/css/ionic.min.css'],
        },
      },
    },
    copy: {
      main: {
        files: [
          {nonull: true, flatten: true, expand: true, cwd: 'bower_components/ionic/release/fonts/', src: '*', dest: 'www/vendors/fonts/',},
          {nonull: true, flatten: true, expand: true, cwd: 'bower_components/angular-sanitize/', src: 'angular-sanitize.min.js.map', dest: 'www/vendors/js'}
        ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['concat', 'copy']);
};