var defaultVal = angular.module('defaultVal', []);
defaultVal.controller('MyCtrl',['$scope',function ($scope) {
	$scope.date=new Date();
}]);