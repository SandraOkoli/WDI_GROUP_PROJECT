angular
  .module('outApp')
  .controller('eventsEditController', eventsEditController );

eventsEditController.$inject = [ 'Event', '$stateParams', '$state', '$scope', 'filepickerService'];

function eventsEditController(Event, $stateParams, $state, $scope, filepickerService ) {
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

  vm.pickFile = (e) => {
    e.preventDefault();
    filepickerService.pick({mimetype: 'image/*'}, (Blob) => {
      if (Blob && Blob.url){
        vm.event.coverImage = Blob.url;
        $scope.$apply();
      }
    });
  };


}
