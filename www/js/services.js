angular.module('starter.services', [])

var mixApp = angular.module('starter.services', [])

mixApp.factory('mixesFactory', function($http) {
  return {
    getMixesAsync: function(url, callback) {
      var url = url === null ? 'http://api.mixcloud.com/search/?q=igreja&type=cloudcast' : url;
      $http.get(url).success(callback);
    },
    getMixAsync: function(user, slug, callback) {
      var key = user + "/" + slug;
      $http.get('http://www.mixcloud.com/oembed/?url=http://www.mixcloud.com/' + key + '/&format=json').success(callback);
    },
    getAllAuthorMixesAsync: function(callback) {
      $http.get('http://api.mixcloud.com/search/?q=igreja&type=user').success(callback);
    },
    getAuthorMixesAsync: function(user, callback) {
      $http.get('http://api.mixcloud.com/' + user + '/cloudcasts/').success(callback);
    }
  };
});