angular
  .module('outApp')
  .controller('eventsNewController', eventsNewController);

eventsNewController.$inject = ['Event', '$state', 'filepickerService', '$scope', 'currentUserService'];

function eventsNewController(Event, $state, filepickerService, $scope, currentUserService ) {
  const vm = this;

  vm.submit = event => {
    vm.event.owner = currentUserService.currentUser.id;
    vm.event.location    = { lat: '51.515379', lng: '-0.072513' };

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
