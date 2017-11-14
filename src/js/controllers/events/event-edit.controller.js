angular
  .module('outApp')
  .controller('eventsEditController', eventsEditController );

eventsEditController.$inject = [ 'Event', '$stateParams', '$state'];

function eventsEditController(Event, $stateParams, $state ) {
  const vm = this;

  vm.event = Event.get($stateParams);

  vm.submit = event => {
    Event
      .update({ id: event._id }, event)
      .$promise
      .then(() => {
        $state.go('eventsShow', { id: event._id });
      });
  };
}
