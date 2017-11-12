angular
  .module('outApp')
  .factory('User', User);

User.$inject = [
  'API',
  '$resource'
];

function User(
  API,
  $resource
){
  return $resource(`${API}/users/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}

/*FOR REFERENCE
get: { method: 'GET' }, // SHOW
save: { method: 'POST' }, // CREATE
remove: { method: 'DELETE' }, // DELETE
delete: { method: 'DELETE' }, // DELETE AGAIN FOR OLDER BROWERS
query: { method: 'GET', isArray: true } // INDEX*/
