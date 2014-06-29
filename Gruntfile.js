module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      basic_and_extras: {
        files: {
          'www/js/angular.js': [
            'bower_components/angular/angular.min.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-mocks/angular-mocks.min.js',
            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-ui-routes/angular-ui-routes.min.js',
          ],
          'www/js/ionic.js': ['bower_components/ionic/release/js/ionic.bundle.min.js'],
          'www/css/ionic.css': ['bower_components/ionic/release/css/ionic.min.css'],
        },
      },
    },
    copy: {
      main: {
        files: [
          {nonull: true, flatten: true, expand: true, cwd: 'bower_components/ionic/release/fonts/', src: '*', dest: 'www/fonts/',}
        ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['concat', 'copy']);
};