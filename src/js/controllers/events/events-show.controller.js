angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);

eventsShowController.$inject = ['Event','$stateParams'];
function eventsShowController(Event, $stateParams) {
  const vm = this;
  vm.event = Event.get($stateParams);
  vm.id = $stateParams;

}
