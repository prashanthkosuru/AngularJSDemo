angular.module('myApp',[]).//create module
	controller('AdditionController',function($scope){//create controller with controller specific scope
	    $scope.valueA=5;//initialize scope
	    $scope.valueB=6;
	    $scope.valueC=12;
	    $scope.addValues=function(v1,v2){//Augment business logic to scope
	        var v=angular.$rootScope;
	        $scope.valueC=v1+v2;
	};
});