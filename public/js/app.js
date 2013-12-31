angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'about/partials/index',
        controller: IndexCtrl
      }).
      when('/about/new', {
        templateUrl: 'about/partials/edit',
        controller: AddPostCtrl
      }).
      // }).
      // when('/readPost/:id', {
      //   templateUrl: 'about/partials/readPost',
      //   controller: ReadPostCtrl
      // }).
      // when('/editPost/:id', {
      //   templateUrl: 'about/partials/editPost',
      //   controller: EditPostCtrl
      // }).
      // when('/deletePost/:id', {
      //   templateUrl: 'about/partials/deletePost',
      //   controller: DeletePostCtrl
      // }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
