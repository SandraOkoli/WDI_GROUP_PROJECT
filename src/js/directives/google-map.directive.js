angular
  .module('outApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$timeout', '$rootScope'];

function googleMap($window, $timeout, $rootScope) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      let map;


      $timeout(setMap, 200);

      function setMap() {
        const mapCenter = {'lat': parseFloat(scope.center.lat) , 'lng': parseFloat(scope.center.lng) };
        console.log('center', scope.center);

        map = new $window.google.maps.Map(element[0], {
          zoom: 14,
          center: mapCenter
        });

        new $window.google.maps.Marker({
          map: map,
          position: scope.center
        });
      }

      $rootScope.$on('setNewCenter', (e, newLocation) => {
        console.log(newLocation);
        map.panTo(newLocation);

        const marker = new $window.google.maps.Marker({
          position: newLocation,
          map: map,
          animation: $window.google.maps.Animation.DROP
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        const contentString =
            `<div id="infoWindowContent">
              <div id="siteNotice">
              </div>
              <h1 id="firstHeading" class="firstHeading">${newLocation.name}</h1>
              <div id="bodyContent">
              <div>Rating: ${newLocation.rating}</div>
              <div>More info: <a target="_blank" href="${newLocation.url}">Go</a></div>
            </div>`;

        // add info window for marker
        const infowindow = new google.maps.InfoWindow({
          content: contentString
        });
      });
    }
  };
}
