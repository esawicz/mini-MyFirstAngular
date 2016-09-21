var app = angular.module('friendsList', [])

app.controller('mainCtrl', ['$scope', function($scope) {
	$scope.myName = 'Ellen';
	$scope.myFriends = ['Clinton', 'June', 'Scarlet'];
	$scope.nums = []
	for (var i = 0; i <100; i++){
		$scope.nums.push(i);
	}
	$scope.addFriend = function(name) {
		$scope.myFriends.push(name);
	}
}]);  