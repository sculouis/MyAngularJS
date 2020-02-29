(function () {
    'use strict';
  
    angular.
    module('reduxSampleModule', ['ui.bootstrap'])
    .component('reduxSample', {
      templateUrl: 'reduxSample/reduxSampleTemplate.html',
      controller: ['$ngRedux', function ($ngRedux) {
        var $ctrl = this;
        var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
          return {
            stories: state.stories
          };
        }, {})($ctrl);

        console.log($ctrl.stories.length);
        $ctrl.$onDestroy = function(){
          unsubscribe;
          console.log("destroy");
        }
        $ctrl.$onChanges = function (changeObj) {

        }

        $ctrl.onClick = function () {
          $ngRedux.dispatch({
            type: 'Add',
            payload: {
              id: $ctrl.stories.length + 1,
              title: '測試新增' + $ctrl.stories.length + 1,
              points: 100,
              isResolved: false
            }
          });
        }

        $ctrl.delete = function (index,store) {
          alertify.confirm('確認刪除？',
          function(){
            $ngRedux.dispatch({
              type: 'delete',
              payload:index 
              });
              alertify.success('You Choiced ok to Delete:' + store.title);
          }
          ,function(){
            alertify.error('You Choiced Cancel');
          }
          )          
        }
    }]});
  })();