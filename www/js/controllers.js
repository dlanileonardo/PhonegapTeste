angular.module('starter.controllers', [])

.controller('RecentesCtrl', function($scope, mixesFactory) {
  mixesFactory.getMixesAsync(function(results) {
    $scope.mixes = results.data;
  });
})
.controller('RecentesVisualizarCtrl', function($scope, $sce, $stateParams, mixesFactory) {
  mixesFactory.getMixAsync($stateParams.user, $stateParams.slug, function(results) {
    $scope.mix = results;
    $scope.embed = function() {
      return $sce.trustAsHtml(results.embed);
    };
  });
})

.controller('AutorCtl', function($scope, mixesFactory) {
  mixesFactory.getAllAuthorMixesAsync(function(results) {
    $scope.mixes = results.data;
  });
})
.controller('AutorCloudcastsCtl', function($scope, $sce, $stateParams, mixesFactory) {
  mixesFactory.getAuthorMixesAsync($stateParams.user, function(results) {
    $scope.mixes = results.data;
  });
})
.controller('AutorVisualizarCtl', function($scope, $sce, $stateParams, mixesFactory) {
  mixesFactory.getMixAsync($stateParams.user, $stateParams.slug, function(results) {
    $scope.mix = results;
    $scope.embed = function() {
      return $sce.trustAsHtml(results.embed);
    };
  });
});

// .controller('AccountCtrl', function($scope) {
// });