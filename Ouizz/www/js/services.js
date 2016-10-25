angular.module('starter.services', [])

.factory('Events', function($http) {
  // Modification test pour création de show pour le tab dash

  // Some fake testing data
  var events = [];

  
    return {
    all: function() {
      return $http.get("http://ouizz-api.herokuapp.com/events.json")
        .then(function(response) {
          events = response.data;
          return events;
        })
      },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
});