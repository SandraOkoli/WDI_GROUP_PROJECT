angular.module('outApp').directive('googleMap', googleMap);

googleMap.$inject = [
  '$window',
  '$timeout',
  '$rootScope',
  '$compile',
  'Event',
  'currentUserService',
  '$stateParams'
];

function googleMap(
  $window,
  $timeout,
  $rootScope,
  $compile,
  Event,
  currentUserService,
  $stateParams
) {
  let mapCenter;

  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      let map;

      scope.addAttendeeLocPref = function() {
        // inject Event factory, CurrentUserService.
        const currentAttendee = currentUserService.currentUser;
        const prefLoc = mapCenter;
        const newAttendeePref = {
          attendee: currentAttendee.id,
          location: {
            lat: prefLoc.lat,
            lng: prefLoc.lng
          }
        };
        console.log($stateParams);
        Event.addLocationPref(
          { id: $stateParams.id },
          newAttendeePref
        ).$promise.then(data => {
          console.log(data);
        });
      };

      $timeout(setMap, 200);

      function setMap() {
        mapCenter = {
          lat: parseFloat(scope.center.lat),
          lng: parseFloat(scope.center.lng)
        };

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
        scope.newLocation = newLocation;
        map.panTo(newLocation);

        const marker = new $window.google.maps.Marker({
          position: newLocation,
          map: map,
          animation: $window.google.maps.Animation.DROP
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        const contentString = `<form>
              <div id="infoWindowContent">
                <div id="siteNotice"></div>
                <h1 id="firstHeading" class="firstHeading">${
                  newLocation.name
                }</h1>
                <div id="bodyContent">
                <div>Rating: ${newLocation.rating}</div>
                <div>More info: <a target="_blank" href="${
                  newLocation.url
                }">Go</a></div>
              </div>
              <br><br>
              <div>
                <input ng-click="addAttendeeLocPref()" id="attendeePref" class="button-primary" type="submit" value="Add as Preference">
              </div>
            </form>`;

        const infoWindowHtml = $compile(contentString)(scope);

        // add info window for marker
        const infowindow = new $window.google.maps.InfoWindow({
          content: infoWindowHtml[0]
        });
      });
    }
  };
}
