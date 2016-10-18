angular.module('starter.services', [])

.factory('Evenements', function() {
  // Modification test pour création de show pour le tab dash

  // Some fake testing data
  var evenements = [{
    id: 1,
    entityid: 1,
    name: 'Concert du BDA',
    email: 'sgoetz15@gmail.com',
    phone: '0672254384',
    place: 'Kfet',
    date: '28/10/2016',
    hour: '21h',
    capacity: '300',
    description:'Venez nombreux au prochain concert organisé par votre BDA avec comme invité David Guetta',
    price: '3',
    image: 'http://upload.wikimedia.org/wikipedia/commons/1/1c/Paramore_Concert.jpg'
  }, {
    id: 2,
    entityid: 1,
    name: 'Tournoi de rugby',
    email: 'sgoetz15@gmail.com',
    phone: '0672254384',
    place: 'Terrain principal',
    date: '15/11/2016',
    hour: '13h',
    capacity: '50',
    description:'Tournoi de rugby féminin inter-écoles de commerce',
    price: '0',
    image: 'http://usmmontargis.typepad.com/.a/6a0120a655c488970b01a73e07884f970d-pi'
  }];

  return {
    all: function() {
      return evenements;
    },
    get: function(evenementId) {
      for (var i = 0; i < evenements.length; i++) {
        if (evenements[i].id === parseInt(evenementId)) {
          return evenements[i];
        }
      }
      return null;
    }
  };
});