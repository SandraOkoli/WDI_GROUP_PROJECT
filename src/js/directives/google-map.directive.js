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
        map.panTo(newLocation);

        const marker = new $window.google.maps.Marker({
          position: newLocation,
          map: map,
          animation: $window.google.maps.Animation.DROP
        });


        // add info window for marker
        
      });
    }
  };
}
