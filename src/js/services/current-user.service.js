angular
  .module('outApp')
  .service('currentUserService', currentUserService);

currentUserService.$inject = [
  '$auth',
  'User',
  '$rootScope'
];

function currentUserService(
  $auth,
  User,
  $rootScope
){
  const self = this;

  self.getUser = () => {

    const decoded = $auth.getPayload();

    if(decoded) {
      User
        .get({ id: decoded.userId })
        .$promise
        .then(user => {
          self.currentUser = user;
          $rootScope.$broadcast('loggedIn');
        });
    }
  };
  self.getUser();
}
