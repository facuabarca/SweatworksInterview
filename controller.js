var app = angular.module('test', [])

app.controller('testController', ['$scope', function($scope) {

	$scope.arrayNumbers = [];
	$scope.minNumber = null;
	$scope.maxNumber = null;
	$scope.classFilter = "";
	$scope.classListDisplay = 'left';

	$scope.filterFn = function(number)
	{
  		switch($scope.classFilter){
  			case 'odd':
  			 if (number % 2 !== 0) {
  			  	return true;	
  			  }
  				break;
  			case 'even':
  			  if (number%2 == 0) {
  			  	return true;	
  			  }
  				break;
  			default: 
  				return true 
  		}
	};	
}]);


