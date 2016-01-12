angular.module("myApp",["ui.router","myApp.controllers.IntroCtrl","myApp.controllers.MovieCtrl","myApp.services.Avengers","myApp.directives.Actor"]).config(function($stateProvider,$urlRouterProvider){$stateProvider.state("intro",{url:"/",templateUrl:"views/intro.html",controller:"IntroCtrl"}).state("dashboard",{url:"/dashboard",templateUrl:"views/menu.html",controller:"DashboardCtrl"}).state("addMovie",{url:"/add-movie",templateUrl:"views/new-movie.html",controller:"MovieCtrl"}),$urlRouterProvider.otherwise("/")});
angular.module("myApp.controllers.IntroCtrl",[]).controller("IntroCtrl",["$scope","Avengers",function($scope,Avengers){$scope.avengers=Avengers}]);
angular.module("myApp.controllers.MovieCtrl",[]).controller("MovieCtrl",["$scope",function($scope){}]);
angular.module("myApp.directives.Actor",[]).directive("actor",function(){return{restrict:"E",templateUrl:"views/partials/actor.html"}});
angular.module("myApp.services.Avengers",[]).factory("Avengers",function(){var self={};return self});