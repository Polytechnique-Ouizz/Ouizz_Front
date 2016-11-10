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
    },

    get_ouizzuser_id: function(ouizzuser_username, ouizzuser_password) 
    {
      return $http.get("http://ouizz-api.herokuapp.com/ouizzusers.json").then(function(response)
      {
        ouizzusers = response.data; // liste des users
        founduser = undefined;
        //console.log('1')
        for (user in ouizzusers) 
        {
          //console.log(ouizzusers[user].id + ', ' + ouizzusers[user].username + ', ' + ouizzusers[user].password)
          //console.log(ouizzuser_username + ', ' + ouizzuser_password)
          if (ouizzusers[user].username === ouizzuser_username) // on cherche le user avec le username en entrée
          {
            //console.log('Utilisateur trouvé')
            founduser = ouizzusers[user] // trouvé ! 
            if (founduser.password == ouizzuser_password) // on cherche si le password est le bon
            {
              //console.log('Mot de passe correct')
              console.log('Id : ' +  founduser.id)
              return founduser.id; // bon password
            }
            else {
            var alertPopup = $ionicPopup.alert({
               title: 'Mot de passe incorrect',
               template: 'Veuillez réessayer'
             });
            throw "Mot de passe incorrect"
            }
          }
        }
        var alertPopup = $ionicPopup.alert({
               title: 'Mot de passe incorrect',
               template: 'Veuillez réessayer'
             });
        var alertPopup = $ionicPopup.alert({
               title: 'Utilisateur inconnu',
               template: 'Veuillez réessayer'
             });
        throw "Utilisateur inconnu"
      });
    },

    register: function(eventId, ouizzuser_id) 
    {
      return $http.post("http://ouizz-api.herokuapp.com/events/" + eventId + "/register.json", {registration: {ouizzuser_id: ouizzuser_id}}).then(function(response){
        registration = response.data;
        return registration
      });
    }
  };
});