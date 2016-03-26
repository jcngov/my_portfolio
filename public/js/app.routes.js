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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
