angular.module('starter.services', [])

.factory('Events', function($http) {
  // Modification test pour création de show pour le tab dash

  // Some fake testing data
  var events = [];
  var registrations = [];
  var myevents = [];

  
  return {
    all: function() {
      return $http.get("http://ouizz-api.herokuapp.com/events.json")
      .then(function(response) {
        events = response.data;
        return events;
      })
    },

	allmine: function(iduser) {
      return $http.get("http://ouizz-api.herokuapp.com/registrations.json")
      .then(function(response) {
        registrations = response.data; 
      for (var i =0 ; i < registrations.length; i++){
		//console.log(registrations[i].ouizzuser_id);		
        	if (registrations[i].ouizzuser_id == iduser){
        		for (var j = 0 ; j < events.length; j++){
        			if (events[j].id == registrations[i].event_id){
					//console.log(events);
						if (!myevents.includes(events[j])){
							myevents.push(events[j]);
						}
        				
        			}
        		}
        	}
        }
        return myevents;
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

    get_ouizzuser_id: function(ouizzuser_username, ouizzuser_password, scope) 
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
              scope.showAlertAgreed();
              return founduser.id; // bon password
            }
            else {
            scope.showAlertPassword();
            throw "Mot de passe erroné !"
            }
          }
        }
        scope.showAlertUsername();
        throw "Utilisateur inconnu !"
      });
    },

    register: function(myevents, eventId, ouizzuser_id, scope){
    	console.log('ouizzuser_id:' + ouizzuser_id);
    	if (ouizzuser_id == 0){
    		scope.showAlertConnexion();
    		throw "Veuillez vous connecter pour pouvoir vous inscrire"
    	}
    	else {
    		for (var i = 0 ; i < myevents.length; i++){
    			var k = 0;
    			if (myevents[i].id == eventId){
    				k = 1;
    				scope.showAlertAlreadyregistered();
    				throw "Vous etes déjà inscrit à cet évènement"
    			}
    		}

    		if (k == 0){
      			return $http.post("http://ouizz-api.herokuapp.com/events/" + eventId + "/register.json", {registration: {ouizzuser_id: ouizzuser_id}}).then(function(response){
        		registration = response.data;
        		return registration
      			});
      		}
  		}
  	}
  }
});
