angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);

eventsShowController.$inject = ['Event','$stateParams','$state', 'User', 'currentUserService'];
function eventsShowController(Event, $stateParams, $state, User, currentUserService) {
  const vm = this;
  vm.arrOfAttendees = [];

  Event
    .get($stateParams)
    .$promise
    .then(event => {
      vm.event = event;

      User
        .get({ id: vm.event.owner })
        .$promise
        .then(user => {
          vm.event.owner = user;

          for (var i = 0; i < vm.event.attendees.length; i++) {
            User
              .get({ id: vm.event.attendees[i] })
              .$promise
              .then(user => {
                vm.arrOfAttendees.push(user);
              });
          }
        });

      //this will only work for the current model where attendees is String. WIll need to refactor when the model is changed to an array of users

      User
        .get({ id: vm.event.comments.createdBy })
        .$promise
        .then(user => {
          vm.event.comments.createdBy = user;
        });
    });

  vm.delete = event => {
    Event
      .remove({ id: event._id })
      .$promise
      .then(() => {
        $state.go('eventsIndex');
      });
  };

  vm.createComment = () => {
    Event
      .addComment({ id: vm.event._id }, vm.comment)
      .$promise
      .then(data => {
        vm.comment = {};
        vm.event.comments = data.comments;
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

    const there = contains(vm.event.attendees,currentUserService.currentUser.id );
    there === true ? console.log('already there'):   vm.event.attendees.push(currentUserService.currentUser.id);

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
