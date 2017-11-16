angular
  .module('outApp')
  .controller('loginController', loginController);

loginController.$inject = [
  '$state',
  '$auth',
  'currentUserService'
];

function loginController(
  $state,
  $auth,
  currentUserService
){
  const vm = this;

  vm.submitForm = login;

  function login(){
    $auth
      .login(vm.user)
      .then(() => {
        currentUserService.getUser();
        $state.go('eventsIndex');
      });
  }
}
