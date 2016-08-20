
var myApp = angular.module('condoeasy',[]);
myApp.controller('main', ['$scope', function($scope) {
  socket.on("fetch_not", function(res){
    $scope.nots = res
    $scope.$apply()
    console.log($scope.nots)
    $("#counternots").html($scope.nots.length)
  })
  socket.on("send_not", function (res) {
  	console.log(res)
  	$scope.nots.push(res)
    $scope.$apply()
    $("#counternots").html($scope.nots.length)
  	
  })
}]);