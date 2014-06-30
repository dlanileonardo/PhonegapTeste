angular.module('starter.controllers', [])

.controller('RecentesCtrl', function($scope, mixesFactory) {
  $scope.mixes = [];
  $scope.paging = null;
  $scope.moreData = true;

  $scope.loadMore = function(){
    mixesFactory.getMixesAsync($scope.paging, function(results) {
      angular.forEach(results.data, function(value, key) {
        $scope.mixes.push(value);
      });
      $scope.paging = results.paging.next;
      $scope.moreData = results.paging.next === undefined ? false : true;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.moreDataCanBeLoaded = function(){
    return $scope.moreData;
  };

  $scope.$on('stateChangeSuccess', function() {
    $scope.loadMore();
  });

  $scope.doRefresh = function(){
    mixesFactory.getMixesAsync(null, function(results) {
      $scope.mixes = results.data;
      $scope.urlmore = results;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
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

  $scope.doRefresh = function(){
    mixesFactory.getAllAuthorMixesAsync(function(results) {
      $scope.mixes = results.data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
})
.controller('AutorCloudcastsCtl', function($scope, $sce, $stateParams, mixesFactory) {
  mixesFactory.getAuthorMixesAsync($stateParams.user, function(results) {
    $scope.mixes = results.data;
  });

  $scope.doRefresh = function(){
    mixesFactory.getAuthorMixesAsync($stateParams.user, function(results) {
      $scope.mixes = results.data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
})
.controller('AutorVisualizarCtl', function($scope, $sce, $stateParams, mixesFactory) {
  mixesFactory.getMixAsync($stateParams.user, $stateParams.slug, function(results) {
    $scope.mix = results;
    $scope.embed = function() {
      return $sce.trustAsHtml(results.embed);
    };
  });
});