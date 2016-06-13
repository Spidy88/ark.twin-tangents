import config from './index.config.js';
import run from './index.run.js';
import AppController from './app.controller.js';
import ContributorsController from './contributors/contributors.controller';
import HomeController from './home/home.controller.js';
import EventsController from './events/events.controller.js';
import UserService from './services/user.service.js';

angular.module('ark.twintangents', ['ui.router', 'angularMoment', 'ngSanitize', 'btford.markdown'])
    .config(config)
    .run(run)
    .controller('AppController', AppController)
    .controller('ContributorsController', ContributorsController)
    .controller('HomeController', HomeController)
    .controller('EventsController', EventsController)
    .service('userService', UserService);

angular.element(document).ready(() => {
    angular.bootstrap(document.body, ['ark.twintangents'], {strictDi: true});
});