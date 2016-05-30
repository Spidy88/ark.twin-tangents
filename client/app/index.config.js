export default function($stateProvider, $urlRouterProvider, markdownConverterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/partials/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
        })
        .state('how-to-connect', {
            url: '/server/how-to-connect',
            templateUrl: '/partials/how-to-connect.html'
        })
        .state('settings', {
            url: '/server/settings',
            templateUrl: '/partials/settings.html'
        })
        .state('rules', {
            url: '/server/rules',
            templateUrl: '/partials/rules.html'
        })
        .state('map', {
            url: '/server/map',
            templateUrl: '/partials/map.html'
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
        })
        .state('about', {
            url: '/about',
            templateUrl: '/partials/about.html'
        });

        markdownConverterProvider.config({
            parseImgDimensions: true
        });
}