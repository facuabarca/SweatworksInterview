app.directive('directiveNumbers', function () {
    return {
        link: function ($scope, element) {
            element.bind('change', function () {            	
                $scope.arrayNumbers = [];
                if($scope.minNumber !== null && $scope.maxNumber !== null) {
 					for(i = $scope.minNumber; i < $scope.maxNumber + 1; i++) {
        					$scope.arrayNumbers.push(i);
      				};
      				$scope.$apply(function () { 
				       $scope.arrayNumbers = $scope.arrayNumbers; 
       				});
            	}
            });
        }
    };
});


