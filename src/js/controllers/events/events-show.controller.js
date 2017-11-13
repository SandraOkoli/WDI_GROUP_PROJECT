angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);

eventsShowController.$inject = ['Event','$stateParams','$state'];
function eventsShowController(Event, $stateParams, $state) {
  const vm = this;

  vm.event = Event.get($stateParams);
  //console.log(vm.event);

  vm.delete = event => {
    Event
      .remove({ id: event._id })
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  };

}
