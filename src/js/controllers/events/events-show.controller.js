angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);


eventsShowController.$inject = ['Event','$stateParams','$state', 'User', 'currentUserService', 'moment'];
function eventsShowController(Event, $stateParams, $state, User, currentUserService, moment) {

  const vm = this;

  vm.events = Event.query();

  //if stateParams contains an id i.e. the user is not viewing the index page
  if ($stateParams.id) {
    Event
      .get($stateParams)
      .$promise
      .then(event => {
        vm.event = event;
      });
  }

  vm.delete = event => {
    Event
      .remove({ id: event._id })
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  };

  vm.createComment = () => {
    const commentObject = { 'createdBy': vm.currentUser, 'content': vm.comment.content  };
    Event
      .addComment({ id: vm.event._id }, commentObject)
      .$promise
      .then(data => {
        vm.comment = {};
        vm.event.comments = data.comments;

        vm.event.comments[vm.event.comments.length -1 ].createdBy = currentUserService.currentUser;
      });
  };

  vm.deleteComment = comment => {
    Event
      .deleteComment({ id: vm.event._id, commentId: comment._id})
      .$promise
      .then(() => {
        const index = vm.event.comments.map(comment => comment._id).indexOf(comment._id);
        vm.event.comments.splice(index, 1);
      });
  };

  vm.joinEvent = () => {
    vm.currentUser = currentUserService.currentUser.id;

    const there = contains(vm.event.attendees,currentUserService.currentUser );
    there === true ? console.log('already there'): vm.event.attendees.push(currentUserService.currentUser);

    function contains(a,obj){
      for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
          return true;
        }
      }
      return false;
    }
  };
}
