var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home.html' //
    });
});

app.controller('moviesCtrl', function() {
    this.title = 'Movies with Angular Routes';
});
