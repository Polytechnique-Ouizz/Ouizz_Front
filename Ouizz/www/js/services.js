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
    entityid: 4,
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
  }, {
    id: 3,
    entityid: 3,
    name: 'Conférence de E. Macron',
    email: 'sgoetz15@gmail.com',
    phone: '0672254384',
    place: 'Amphitéâtre Etienne Marcel',
    date: '16/11/2016',
    hour: '19h',
    capacity: '50',
    description:'Conférence de E.Macron ex-ministre sur le système bancaire',
    price: '0',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Emmanuel_Macron_par_Claude_Truong-Ngoc_avril_2015.jpg/220px-Emmanuel_Macron_par_Claude_Truong-Ngoc_avril_2015.jpg'
  }, {
    id: 4,
    entityid: 5,
    name: 'Retransmission PSG - Chelsea',
    email: 'sgoetz15@gmail.com',
    phone: '0672254384',
    place: 'Amphi 306',
    date: '19/11/2016',
    hour: '20h45',
    capacity: '50',
    description:'Rentransmission du quart de finale de la ligue des champions PSG - Chelsea. Apportez des bières!',
    price: '0',
    image: 'https://yt3.ggpht.com/-16JZetx_Kx4/AAAAAAAAAAI/AAAAAAAAAAA/3L3nBng0z9c/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
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