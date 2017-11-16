angular
  .module('outApp')
  .controller('eventsEditController', eventsEditController );

eventsEditController.$inject = [ 'Event', '$stateParams', '$state'];

function eventsEditController(Event, $stateParams, $state ) {
  const vm = this;

  Event
    .get($stateParams)
    .$promise
    .then((event)=> {
      vm.event = event;
      vm.event.dateTime = new Date(event.dateTime);
    });

  vm.submit = event => {
    Event
      .update({ id: event._id }, event)
      .$promise
      .then(() => {
        $state.go('eventsShow', { id: event._id });
      });
  };
}
