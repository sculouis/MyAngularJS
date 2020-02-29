(function () {
  'use strict';

  angular.
  module('homeModule', ['ui.bootstrap'])
  .component('home', {
    templateUrl: 'home/homeTemplate.html',
    controller: function () {
      var $ctrl = this
      $ctrl.$onChanges = function (changeObj) {
      }
    }
  })
})();