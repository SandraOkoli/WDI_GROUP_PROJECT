angular
  .module('outApp')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];

function Router(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
){
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/authentications/register.html',
      controller: 'registerController as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/authentications/login.html',
      controller: 'loginController as vm'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'usersShowController as vm'
    })
    .state('usersEdit', {
      url: '/user/:id',
      templateUrl: 'js/views/users/edit.html',
      controller: 'usersEditController as vm'
    })
    .state('eventsIndex', {
      url: '/events',
      templateUrl: 'js/views/events/event-index.html',
      controller: 'eventsIndexController as vm'
    })
    .state('eventsNew', {
      url: '/events/new',
      templateUrl: 'js/views/events/event-new.html',
      controller: 'eventsNewController as vm'
    })
    .state('eventsShow', {
      url: '/events/:id',
      templateUrl: 'js/views/events/event-show.html',
      controller: 'eventsShowController as vm'
    })
    .state('eventsEdit', {
      url: '/events/:id',
      templateUrl: 'js/views/events/event-edit.html',
      controller: 'eventsEditController as vm'
    });

  $urlRouterProvider.otherwise('/');
}
