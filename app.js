(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.givenlunch="";
    $scope.showMessage="";
    $scope.pickColor="";
    $scope.checkLunch = function () {
      if ($scope.givenlunch == "") {
        $scope.showMessage="Please Enter data first"
        $scope.pickColor="red";
      }
      else {
        var arrayOfStrings = (($scope.givenlunch).split(','));
        console.log(arrayOfStrings.length);
        if (arrayOfStrings.length <= 3) {
          $scope.showMessage = "Enjoy!";
            $scope.pickColor="green";
        }
        else {
          $scope.showMessage = "Too Much";
            $scope.pickColor="green";
        }
      }
    };

  }

})();
