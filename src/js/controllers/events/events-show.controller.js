angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);

eventsShowController.$inject = ['Event','$stateParams','$state', 'User'];
function eventsShowController(Event, $stateParams, $state, User) {
  const vm = this;

  Event
    .get($stateParams)
    .$promise
    .then(event => {
      vm.event = event;

      User
        .get({ id: vm.event.owner })
        .$promise
        .then(user => {
          vm.event.owner = user.firstName;
        });

      //this will only work for the current model where attendees is String. WIll need to refactor when the model is changed to an array of users
      User
        .get({ id: vm.event.attendees })
        .$promise
        .then(user => {
          vm.event.attendees = user.firstName;
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
