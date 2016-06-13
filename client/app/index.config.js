export default function($stateProvider, $urlRouterProvider, markdownConverterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: '/partials/index.html',
            controller: 'AppController',
            controllerAs: 'app',
            resolve: {
                currentUser: function(userService) {
                    'ngInject';
                    
                    return userService.getCurrentUser(false);
                }
            }
        })
        .state('root.home', {
            url: '/',
            templateUrl: '/partials/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
        })
        .state('root.how-to-connect', {
            url: '/server/how-to-connect',
            templateUrl: '/partials/how-to-connect.html'
        })
        .state('root.settings', {
            url: '/server/settings',
            templateUrl: '/partials/settings.html'
        })
        .state('root.rules', {
            url: '/server/rules',
            templateUrl: '/partials/rules.html'
        })
        .state('root.map', {
            url: '/server/map',
            templateUrl: '/partials/map.html'
        })
        .state('root.contact', {
            url: '/contact',
            templateUrl: '/partials/contact.html'
        })
        .state('root.contributors', {
            url: '/contributors',
            templateUrl: '/partials/contributors.html',
            controller: 'ContributorsController',
            controllerAs: 'ctrl'
        })
        .state('root.about', {
            url: '/about',
            templateUrl: '/partials/about.html'
        })
        .state('root.events', {
            url: '/events',
            templateUrl: '/partials/events.html'
        })
        .state('root.voting', {
            url: '/voting',
            templateUrl: '/partials/voting.html'
        });

        markdownConverterProvider.config({
            parseImgDimensions: true
        });
}