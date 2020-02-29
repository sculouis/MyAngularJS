(function () {
  'use strict';

  angular.module('tabModule', ['ui.bootstrap', 'ngRedux'])
    .component('tabs', {
      templateUrl: 'tabs/tabTemplate.html',
      controller:  function () {
        var $ctrl = this;
    }})
})();