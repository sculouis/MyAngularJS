(function(){
'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', ['homeModule','tabModule','reduxSampleModule',
  'ngRoute',
  'ngRedux',
  
]).
config(['$locationProvider', '$routeProvider','$ngReduxProvider', function($locationProvider, $routeProvider,$ngReduxProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when('/tabs', {
    template: '<tabs></tabs>'
  }).
  when('/reduxSample', {
    template: '<redux-sample></redux-sample>'
  })
  .otherwise({redirectTo: '/'})

  $ngReduxProvider.createStoreWith(function rootReducer(state, action) 
  {
    if (angular.isUndefined(state)) {
      return {
        stories: []
      };
    }
    
    switch (action.type) {
      case 'TOGGLE_STORY':
        var story = findById(state.stories, action.payload.id);
        story.isResolved = !story.isResolved;
        state.stories[state.stories.indexOf(story)] = angular.copy(story);
        break;
      case 'Add':
        state.stories.push(action.payload);
        break;
        case 'delete':
          state.stories.splice(action.payload,1);
          break;
      }
    
    return state;
    
    function findById(elements, id) {
      var index = elements.map(function (element) {
          return element.id;
        }).indexOf(id);
      
      return elements[index];
    }
  },[],
  window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : []       
 );
}]);
})();