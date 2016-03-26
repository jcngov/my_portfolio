(function(){

  'use strict';

  angular
    .module('app')
    .config(appRoutes);

  appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/js/app/layouts/home.html'
      })
      .state('work', {
        url: '/work',
        templateUrl: '/js/app/layouts/work.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '/js/app/layouts/contact.html'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
