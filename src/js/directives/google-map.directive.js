angular
  .module('outApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window', '$timeout'];

function googleMap($window, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      $timeout(setMap, 200);

      function setMap() {
        const mapCenter = {'lat': parseFloat(scope.center.lat) , 'lng': parseFloat(scope.center.lng) };
        console.log('center', scope.center);

        const map = new $window.google.maps.Map(element[0], {
          zoom: 14,
          center: mapCenter
        });

        new $window.google.maps.Marker({
          map: map,
          position: scope.center
        });
      }
    }
  };
}
