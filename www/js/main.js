var main = angular.module('main', ['ionic', 'ngRoute'])

main.controller('contentController', function contentController($scope, $rootScope, $location) {
})

// search controller

main.controller('searchController', function searchController($scope, $rootScope, $location) {
  $rootScope.title = "Search";
  $scope.list = [
        {title: "Test 1", author: "Jan Doe", date: "2030-02-18T18:35:39.083Z", comments: "$zD!3j#6US", likes: "41"},
        {title: "Test 2", author: "Joe Doe", date: "2030-02-18T18:35:39.083Z", comments: "8X(x&l", likes: "46"},
        {title: "test 3", author: "Jon Doe", date: "2030-02-18T18:35:39.083Z", comments: "bi!ditfFtWi&1)Aq", likes: "19"},
        {title: "tEst 4", author: "Jen Doe", date: "2039-03-23T19:23:13.708Z", comments: "SH^dGw", likes: "49"},
        {title: "tesT 5", author: "Joan Doe", date: "2030-02-18T18:35:39.083Z", comments: "wAv!x!YV&9Zaq$1rT", likes: "85"},
        {title: "teSt 6", author: "Juan Doe", date: "2030-02-18T18:35:39.083Z", comments: "b!XjoBY)2Rjnc", likes: "62"}

    ];
});

// post controller

main.controller('postController', function postController($scope, $rootScope, $location) {
  $rootScope.title = "Post";
  $scope.post = [
    {img: "To be put", author: "Juan Doe", date: "2067-03-30T09:08:52.653Z", comments: "fvnMwYyjng", likes: "5"}
    ];
});

// feed controller

main.controller('feedController', function feedController($scope, $rootScope, $location) {
  $rootScope.title = "Feed";
  $scope.posts = [
    {img: "To be put", author: "Jen Doe", date: "2061-05-01T20:43:23.622Z", comments: "[vII9#$2T#)4(oZ42H", likes: "92"},
    {img: "To be placed", author: "Jon Doe", date: "2081-06-13T05:32:48.518Z", comments: "[vII9#$2T#)4(oZ42H", likes: "92"},
    {img: "To be set", author: "Jan Doe", date: "2031-08-29T11:50:05.983Z", comments: "[vII9#$2T#)4(oZ42H", likes: "92"},
    {img: "To be entered", author: "Joel Doe", date: "2029-06-29T00:20:01.928Z", comments: "[vII9#$2T#)4(oZ42H", likes: "92"},
    {img: "To be called forward", author: "Juan Doe", date: "2101-05-19T22:32:13.524Z", comments: "[vII9#$2T#)4(oZ42H", likes: "92"}
    ];
});

// profile controller

main.controller('profileController', function profileController($scope, $rootScope, $location) {
  $rootScope.title = "Profile";
  $scope.profile = [
    {username: "Robert'); DROP TABLE Students;--", posts: "4577904650645", comments: "42", bio: "Hokzisar jen homje lubwekmu awbib repsuva iwfiwer zilbu ditlugfub ip zofzod zihaec wib."}
    ];
});

main.config(function($routeProvider) {
  $routeProvider
  .when("/feed", {
    templateUrl : "dummy/feed.html"
  })
  .when("/post", {
    templateUrl : "dummy/post.html"
  })
  .when("/search", {
    templateUrl : "dummy/search.html"
  })
  .when("/profile", {
    templateUrl : "dummy/profile.html"
  })
  .otherwise({
    redirectTo : "/feed"
  })
});
