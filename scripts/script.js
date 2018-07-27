var scotchApp=angular.module("scotchApp", ['ngRoute']);

scotchApp.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "pages/home.html",
			controller: "mainController"
		})
		.when("/about", {
			templateUrl: "pages/about.html",
			controller: "aboutController"
		})
		.when("/contact", {
			templateUrl: "pages/contact.html",
			controller: "contactController"
		})
});
scotchApp.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('');
}]);

scotchApp.controller("mainController", function($scope){
	$scope.message="Home Page message";
});

scotchApp.controller("aboutController", function($scope){
	$scope.message="About Page message";
});

scotchApp.controller("contactController", function($scope){
	$scope.message="Contact Page message";
});