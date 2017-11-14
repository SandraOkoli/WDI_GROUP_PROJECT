angular
  .module('outApp')
  .controller('usersEditController', usersEditController);

usersEditController.$inject = [
  'User',
  '$stateParams',
  '$state',
  'filepickerService',
  '$scope'
];

function usersEditController(
  User,
  $stateParams,
  $state,
  filepickerService,
  $scope
){
  const vm = this;

  vm.pickFile = (e) => {
    e.preventDefault();
    filepickerService.pick({mimetype: 'image/*'}, (Blob) => {
      if (Blob && Blob.url){
        vm.user.avatar = Blob.url;
        $scope.$apply();
      }
    });
  };

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
