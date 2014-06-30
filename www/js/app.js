// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.recents', {
      url: '/recents',
      views: {
        'tab-recents': {
          templateUrl: 'templates/recentes/index.html',
          controller: 'RecentesCtrl'
        }
      }
    })
    .state('tab.recent-view', {
      url: '/recent/:user/:slug',
      views: {
        'tab-recents': {
          templateUrl: 'templates/visualizar.html',
          controller: 'RecentesVisualizarCtrl'
        }
      }
    })

    .state('tab.authors', {
      url: '/authors',
      views: {
        'tab-authors': {
          templateUrl: 'templates/autor/index.html',
          controller: 'AutorCtl'
        }
      }
    })
    .state('tab.author-cloudcasts', {
      url: '/author/:user',
      views: {
        'tab-authors': {
          templateUrl: 'templates/autor/cloudcasts.html',
          controller: 'AutorCloudcastsCtl'
        }
      }
    })
    .state('tab.author-view', {
      url: '/author/visualizar/:user/:slug',
      views: {
        'tab-authors': {
          templateUrl: 'templates/visualizar.html',
          controller: 'AutorVisualizarCtl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/recents');
});