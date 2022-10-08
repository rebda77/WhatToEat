// From bootstrap

// $().ready(function(){
//     $('[rel="tooltip"]').tooltip();

//     $('a.scroll-down').click(function(e){
//         e.preventDefault();
//         scroll_target = $(this).data('href');
//          $('html, body').animate({
//              scrollTop: $(scroll_target).offset().top - 60
//          }, 1000);
//     });

// });

// function rotateCard(btn){
//     var $card = $(btn).closest('.card-container');
//     console.log($card);
//     if($card.hasClass('hover')){
//         $card.removeClass('hover');
//     } else {
//         $card.addClass('hover');
//     }
// }

// {"image":"https://foodish-api.herokuapp.com/images/burger/burger101.jpg"}

// const myApp = angular.module("myApp", ['ngSanitize']);
const myApp = angular.module("myApp", []);

//Here is the amazing button to get a random dish pic, ****** awesome

myApp.controller("dishCtrl" , function ($scope, $http){
    
   $scope.getDish = function(){
      console.log('get dish working..')
      $http.get("https://foodish-api.herokuapp.com/api")
      .then(response => $scope.dishImage = response.data.image)
   }
   $scope.getThis = function(selectedItem){
      console.log('get specific dish working..')
      console.log(selectedItem)
      $http.get("https://foodish-api.herokuapp.com/api/images/" + selectedItem)
      .then(response => $scope.dishImage = response.data.image)
   }
});

myApp.controller('dropCtrl', ['$scope', function($scope) {
   $scope.items = [
      { id: 1, name: 'biryani' },
      { id: 2, name: 'burger' },
      { id: 3, name: 'butter-chicken' },
      { id: 4, name: 'dessert' },
      { id: 5, name: 'dosa' },
      { id: 6, name: 'idly' },
      { id: 7, name: 'pasta' },
      { id: 8, name: 'pizza' },
      { id: 9, name: 'rice' },
      { id: 10, name: 'samosa' },
    ];
    $scope.ifSelected = function (){
      $http.get("https://foodish-api.herokuapp.com/api/images/burger")
      .then(response => $scope.burgerImage = response.data.image)
   }
}]);


myApp.controller("addFavCtrl", function ($scope) {
   $scope.items = [""];
   $scope.newItem = "";
  $scope.pushItem = function (){
      if($scope.newItem != "") {
         $scope.items.push($scope.newItem);
         $scope.newItem = "";
      }
   }
   $scope.deleteItem = function(index) {
      $scope.items.splice(index, 1);
   }
});


