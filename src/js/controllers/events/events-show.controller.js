angular
  .module('outApp')
  .controller('eventsShowController', eventsShowController);

eventsShowController.$inject = ['Event','$stateParams','$state', 'User'];
function eventsShowController(Event, $stateParams, $state, User) {
  const vm = this;

  Event
    .get($stateParams)
    .$promise
    .then(event => {
      vm.event = event;

      User
        .get({ id: vm.event.owner })
        .$promise
        .then(user => {
          vm.event.owner = user.avatar;
        });

      //this will only work for the current model where attendees is String. WIll need to refactor when the model is changed to an array of users
      User
        .get({ id: vm.event.attendees })
        .$promise
        .then(user => {
          vm.event.attendees = user.avatar;
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
        console.log(data);
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
}
