angular
  .module('outApp')
  .directive('googleplace', googleplace);

googleplace.$inject = ['$window', '$rootScope'];
function googleplace($window, $rootScope){
  return {
    link: (scope, element) => {
      const options = {
        types: [],
        componentRestrictions: {country: 'uk'}
      };

      scope.googlePlaceInput = new $window.google.maps.places.Autocomplete(element[0], options);
      scope.googlePlaceInput.addListener('place_changed', onPlaceChanged);

      function onPlaceChanged() {
        const newPlace = scope.googlePlaceInput.getPlace();
        console.log(newPlace);
        const newPlaceLatLng = {
          name: newPlace.name,
          lat: newPlace.geometry.location.lat(),
          lng: newPlace.geometry.location.lng(),
          rating: newPlace.rating,
          url: newPlace.url
        };

        $rootScope.$broadcast('setNewCenter', newPlaceLatLng);
      }

    }

  };
}
