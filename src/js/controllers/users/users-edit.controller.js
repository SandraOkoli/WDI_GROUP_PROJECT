angular
  .module('outApp')
  .controller('usersEditController', usersEditController);

usersEditController.$inject = [
  'User',
  '$stateParams',
  '$state'
];

function usersEditController(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  vm.submit = user => {
    console.log(user);

    User
      .update({ id: user.id }, user)
      .$promise
      .then(() => {
        $state.go('usersShow', { id: user.id });
      });
  };
}

//
//   vm.edit = usersEdit;
// }
