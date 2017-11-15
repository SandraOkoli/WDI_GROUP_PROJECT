angular
  .module('outApp')
  .controller('eventsNewController', eventsNewController );

eventsNewController.$inject = ['Event', '$state'];

function eventsNewController(Event, $state ) {
  const vm = this;

  vm.create = eventCreate;

  function eventCreate() {
    Event
      .save(vm.event)
      .$promise
      .then(() => $state.go('eventsNew'));
  }

}
