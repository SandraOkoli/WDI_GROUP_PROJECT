angular
  .module('outApp')
  .factory('Event', Event);

Event.$inject = [
  'API',
  '$resource'
];

function Event(
  API,
  $resource
){
  return $resource(`${API}/events/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' },
    'addComment': { url: `${API}/events/:id/comments`, id: '@_id', method: 'POST' },
    'deleteComment': { url: `${API}/events/:id/comments/:commentId`, id: '@_id', commentId: '@_id', method: 'DELETE' }
  });
}
