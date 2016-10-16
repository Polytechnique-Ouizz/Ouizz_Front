angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Evenements) {
    $scope.evenements = Evenements.all();
  $scope.remove = function(evenement) {
    Evenements.remove(evenement);
  };
})

.controller('EvenementsCtrl', function($scope, Evenements) {


.controller('EvenementDetailCtrl', function($scope, $stateParams, Evenements) {
  $scope.evenement = Evenements.get($stateParams.evenementId);
});
