'use strict';

/**
 * @ngdoc function
 * @name aboutmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aboutmeApp
 */
app.module('aboutmeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
