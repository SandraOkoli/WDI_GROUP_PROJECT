angular
  .module('outApp')
  .controller('eventsNewController', eventsNewController );

eventsNewController.$inject = ['Event', '$state', 'filepickerService', '$scope'];

function eventsNewController(Event, $state, filepickerService, $scope ) {
  const vm = this;

  vm.event = {};

  vm.submit = event => {
    Event
      .save(event)
      .$promise
      .then(()=> {
        $state.go('eventsIndex');
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
