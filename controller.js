(function() {
  'use strict';

  angular
    .module('reactaccess', [])
    .controller('reactAccessController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location', 'smartMethodService'];

  function loadFunction($scope, structureService, $location, smartMethodService) {
    // Register upper level modules
    structureService.registerModule($location, $scope, 'reactaccess');
    React.visualizer = {
      'structureService' : structureService,
      'smartMethodService' : smartMethodService
    };
    ReactDOM.render(
    React.createElement(Hello, {toWhat: $scope.reactaccess.modulescope.name}, null),
    document.getElementById('root'));
    
  }
}());
