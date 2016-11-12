var iduser = 0;

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPopup, $ionicModal, Events) {
  $scope.events = [];
    Events.all().then(function(apiEvents) {
      $scope.events = apiEvents;
	})

	$scope.myevents = [];
    Events.allmine(iduser).then(function(apiEvents) {
      $scope.myevents = apiEvents;
	})


$ionicModal.fromTemplateUrl('templates/modal-register.html', { scope: $scope, animation: 'slide-in-up'}).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

   $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // An alert dialog
  $scope.showAlertUsername = function() {
    var alertPopup = $ionicPopup.alert({
    title: 'Utilisateur inconnu !',
    template: 'Veuillez réessayer',
   });
  };

  $scope.showAlertPassword = function() {
    var alertPopup = $ionicPopup.alert({
    title: 'Mot de passe erroné !',
    template: 'Veuillez réessayer',
   });
  }

  $scope.showAlertAgreed = function() {
    var alertPopup = $ionicPopup.alert({
    title: 'C\'est tout bon !',
    template: 'Vous êtes désormais inscrit(e)',
   });
  };

  $scope.connexion = function(ouizzuser_username, ouizzuser_password) {

    Events.get_ouizzuser_id(ouizzuser_username, ouizzuser_password, $scope).then(function(id) {
    	iduser = id ;
	Events.allmine(id);
	console.log('ouizzuser_id = ' + id);
    	console.log('ouizzuser_username = ' + ouizzuser_username + ', ouizzuser_password = ' + ouizzuser_password);
    	
   		return id;
    });
  }

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




.controller('EventDetailCtrl', function($scope, $ionicPopup, $stateParams, $ionicModal, Events) {
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

  // An alert dialog
  $scope.showAlertUsername = function() {
    var alertPopup = $ionicPopup.alert({
    title: 'Utilisateur inconnu !',
    template: 'Veuillez réessayer',
   });
  };

  $scope.showAlertPassword = function() {
    var alertPopup = $ionicPopup.alert({
    title: 'Mot de passe erroné !',
    template: 'Veuillez réessayer',
   });
  };

  $scope.showAlertAgreed = function() {
    var alertPopup = $ionicPopup.alert({
    title: 'C\'est tout bon !',
    template: 'Vous êtes désormais inscrit(e)',
   });
  };

  $scope.register = function() {
    	console.log(iduser);
   		return Events.register($stateParams.eventId, iduser).then(function(registration) {
      	console.log("Registration", Registration);
      	alert("Votre réservation a bien été prise en compte avec le numéro " + registration.id);
     	  $scope.close;
  	  })
  }
});
