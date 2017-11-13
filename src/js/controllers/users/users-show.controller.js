angular
  .module('outApp')
  .controller('usersShowController', usersShowController);

usersShowController.$inject = [
  'User',
  '$stateParams'
];

function usersShowController(
  User,
  $stateParams
){
  const vm = this;

  vm.user = User.get($stateParams);

}
