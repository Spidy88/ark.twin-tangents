export default function($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/partials/home.html'
        })
        .state('rules', {
            url: '/rules',
            templateUrl: '/partials/rules.html'
        })
        .state('map', {
            url: '/map',
            templateUrl: '/partials/map.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/partials/about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/partials/contact.html'
        })
        .state('contributors', {
            url: '/contributors',
            templateUrl: '/partials/contributors.html',
            controller: 'ContributorsController',
            controllerAs: 'ctrl'
        });
}