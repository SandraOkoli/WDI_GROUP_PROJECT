angular
  .module('outApp')
  .directive('googleMap', googleMap);

let map;

googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {  center: '=' },
    link(scope, element) {
      const map = new $window.google.maps.Map(element[0], {
        zoom: 7,
        center: scope.center
      });

      var request = {
        location: scope.center,
        radius: '500',
        query: 'restaurant'
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);

      new google.maps.Marker({
        map: map,
        position: scope.center

      });
    }
  };
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      let place = results[i];
      addMarker(results[i]);
      // console.log(results);
    }
  }
}

function addMarker(place) {
  let placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}
