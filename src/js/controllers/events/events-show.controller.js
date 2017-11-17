angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);


eventsShowController.$inject = ['Event','$stateParams','$state', 'User', 'currentUserService'];
function eventsShowController(Event, $stateParams, $state, User, currentUserService) {

  const vm = this;
  vm.arrOfAttendees = [];
  vm.arrOfCommenters = [];
  vm.currentUser = currentUserService.currentUser.id;



  Event
    .get($stateParams)
    .$promise
    .then(event => {
      vm.event = event;
      console.log(vm.event);

      // User
      //   .get({ id: vm.event.owner })
      //   .$promise
      //   .then(user => {
      //     vm.event.owner = user;
      //
      //     for (var i = 0; i < vm.event.attendees.length; i++) {
      //       User
      //         .get({ id: vm.event.attendees[i] })
      //         .$promise
      //         .then(user => {
      //           vm.arrOfAttendees.push(user);
      //         });
      //     }
      //
      //
      //     for (var j = 0; j < vm.event.comments.length; j++) {
      //
      //       User
      //         .get({ id: vm.event.comments[j].createdBy })
      //         .$promise
      //         .then(user => {
      //           vm.arrOfCommenters.push(user);
      //         });
      //     }
      //   });
      //
      // for (var i = 0; i < vm.event.attendees.length; i++) {
      //   User
      //     .get({ id: vm.event.attendees[i] })
      //     .$promise
      //     .then(user => {
      //       vm.arrOfAttendees.push(user);
      //     });
      // }
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
    console.log(vm);
    const commentObject = { 'createdBy': vm.currentUser, 'content': vm.comment.content  };
    Event
      .addComment({ id: vm.event._id }, commentObject)
      .$promise
      .then(data => {
        vm.comment = {};
        vm.event.comments = data.comments;
        // console.log(data.comments);

        vm.arrOfCommenters = [];

        for (var i = 0; i < data.comments.length; i++) {

          User
            .get({ id: data.comments[i].createdBy })
            .$promise
            .then(user => {
              vm.arrOfCommenters.push(user);
            });
        }
        // console.log('VM',vm.arrOfCommenters);
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
