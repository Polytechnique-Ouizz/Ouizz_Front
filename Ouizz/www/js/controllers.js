angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Evenements) {
	// tentative de faire ce que Nathan nous a dit : mettre la fonction scope dans DashCtrl
  $scope.evenements = Evenements.all();
})

.controller('EvenementsCtrl', function($scope, Evenements) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter evenement:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.evenements = Evenements.all();
})

.controller('EvenementDetailCtrl', function($scope, $stateParams, Evenements) {
  $scope.evenement = Evenements.get($stateParams.evenementId);
});
