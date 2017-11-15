angular
  .module('outApp')
  .controller('eventsNewController', eventsNewController );

eventsNewController.$inject = ['Event', '$state'];

function eventsNewController(Event, $state ) {
  const vm = this;

  vm.submit = event => {
    // vm.event.owner = '5a0b3bb4ecda184dace3ea77';
    // console.log(event);
    Event
      .save(event)
      .$promise
      .then(()=> {
        $state.go('eventsIndex');
      });
  };

}
