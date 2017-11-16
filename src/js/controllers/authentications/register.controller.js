angular
  .module('outApp')
  .controller('registerController', registerController);

registerController.$inject = [
  '$state',
  '$auth',
  'currentUserService',
  'filepickerService',
  '$scope'
];

function registerController(
  $state,
  $auth,
  currentUserService,
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

  vm.submitForm = register;

  function register(){
    $auth
      .signup(vm.user)
      .then(() => $auth.login(vm.user))
      .then(() => {
        currentUserService.getUser();
        $state.go('eventsIndex');
      });
  }


}
