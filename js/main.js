var app = angular.module('sweetsComplete', [
  'ngRoute'
  
]);

/**
* Configure the Routes
*/

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider)  {
    $locationProvider.html5Mode(true); 
  $routeProvider
  // Home
  .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  //Pages
  .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
  .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
  .when("/products", {templateUrl: "partials/products.html", controller: "PageCtrl"})
  .when("/specials", {templateUrl: "partials/specials.html", controller: "PageCtrl"});
  
}]);

app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
  
});

app.controller('PageCtrl', function (/* $scope, $location, $http */ ) {
  console.log("Page Controller reporting for duty.");

  //Activate the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

});