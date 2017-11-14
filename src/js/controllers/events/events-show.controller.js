angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);

eventsShowController.$inject = ['Event','$stateParams','$state', 'User', '$scope'];
function eventsShowController(Event, $stateParams, $state, User, $scope) {
  const vm = this;

  Event
    .get($stateParams)
    .$promise
    .then(event => {
      vm.event = event;

      $scope.lat = event.lat;
      $scope.lng = event.lng;

      User
        .get({ id: vm.event.owner })
        .$promise
        .then(user => {
          vm.event.owner = user.avatar;
        });

      //this will only work for the current model where attendees is String. WIll need to refactor when the model is changed to an array of users
      User
        .get({ id: vm.event.attendees })
        .$promise
        .then(user => {
          vm.event.attendees = user.avatar;
        });
    });

  vm.delete = event => {
    Event
      .remove({ id: event._id })
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  };

}
