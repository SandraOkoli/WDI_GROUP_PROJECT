angular
  .module('outApp')
  .directive('googleplace', googleplace);

function googleplace(){
  const vm = this;

  return {
    link: function(scope, element, attrs) {
      var options = {
        types: [],
        componentRestrictions: {country: 'uk'}
      };

      scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
      console.log(scope.gPlace);

      element.blur(function(e) {
        window.setTimeout(function() {
          angular.element(element).trigger('input');
        }, 0);
      });
    }

  };

// function MyCtrl($scope) {
//     $scope.gPlace;
// }
}
