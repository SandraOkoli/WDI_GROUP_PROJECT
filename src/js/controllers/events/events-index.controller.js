angular
  .module('outApp')
  .controller('eventsIndexController', eventsIndexController);

eventsIndexController.$inject = ['Event'];

function eventsIndexController(Event) {
  const vm = this;
  vm.events = () => {
    Event.query().then(() => {
      console.log('VMEVENTS', vm.events);
    });
  };
}
