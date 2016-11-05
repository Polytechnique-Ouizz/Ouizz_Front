angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Events) {
	// tentative de faire ce que Nathan nous a dit : mettre la fonction scope dans DashCtrl
  $scope.events = [];
    Events.all().then(function(apiEvents) {
      $scope.events = apiEvents;
});
})


.controller('EventsCtrl', function($scope, Events) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter evenement:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.events = Events.all();
})

.controller('EventDetailCtrl', function($scope, $stateParams, $ionicModal, Events) {
  $scope.event = Events.get($stateParams.eventId);

  $ionicModal.fromTemplateUrl('templates/modal-register.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  /*$scope.get_ouizzuser_id = function(ouizzuser_username, ouizzuser_password)
  {

  };*/
  

//Est-ce utile de définir une fonction vide ici ?


  $scope.register = function(ouizzuser_id) {
    console.log(ouizzuser_id.username + ', ' + ouizzuser_id.password)
    return Events.register($stateParams.eventId, Events.get_ouizzuser_id(ouizzuser_id.username, ouizzuser_id.password))
    .then(function(registration) {
      console.log("Registration", Registration);
      alert("Votre réservation a bien été prise en compte avec le numéro " + registration.id);
      $scope.closeModal();
    })
  }

  });
