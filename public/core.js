var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope, $http, $timeout){

  $scope.submit = function() {
    $scope.message='';

    var arrayone = $scope.wordone.toLowerCase().split("").sort();
    var arraytwo = $scope.wordtwo.toLowerCase().split("").sort();



       if (arrayone.toString() === arraytwo.toString()){
         console.log("angram");
           $scope.message=$scope.wordone + " is an anagram of " + $scope.wordtwo;

       } else {
         console.log("not angram");
        $scope.message=$scope.wordone + " is not an anagram of " + $scope.wordtwo;
       }

       console.log($scope.message);
       $timeout(function () { $scope.message = ""; }, 3000);


          $scope.wordone='';
          $scope.wordtwo='';



        };
});
