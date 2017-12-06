angular.module('outApp').controller('mainController', mainController);

mainController.$inject = ['$rootScope', 'currentUserService', '$state'];

function mainController($rootScope, currentUserService, $state) {
  const vm = this;

  vm.logout = logout;

  function logout() {
    currentUserService.removeUser();
  }

  $rootScope.$on('loggedIn', () => {
    vm.user = currentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });
}
