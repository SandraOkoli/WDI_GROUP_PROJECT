angular.module('outApp').controller('eventsNewController', eventsNewController);

eventsNewController.$inject = [
  'Event',
  '$state',
  'filepickerService',
  '$scope',
  'currentUserService',
  '$rootScope'
];

function eventsNewController(
  Event,
  $state,
  filepickerService,
  $scope,
  currentUserService,
  $rootScope
) {
  const vm = this;
  vm.event = {
    location: {
      lat: null,
      lng: null
    }
  };

  $rootScope.$on('setNewCenter', (event, args) => {
    console.log('THESE ARE THE ARGS ---->', args);
    vm.event.location.lat = parseFloat(args.lat);
    vm.event.location.lng = parseFloat(args.lng);
    console.log(vm.event);
    $scope.$apply();
  });

  vm.submit = event => {
    vm.event.location = { lat: '51.515379', lng: '-0.072513' };
    vm.event.owner = currentUserService.currentUser.id;

    Event.save(event).$promise.then(() => {
      $state.go('eventsIndex');
    });
  };

  vm.pickFile = e => {
    e.preventDefault();
    filepickerService.pick({ mimetype: 'image/*' }, Blob => {
      if (Blob && Blob.url) {
        vm.event.coverImage = Blob.url;
        $scope.$apply();
      }
    });
  };
}
