import config from './index.config.js';
import ContributorsController from './contributors/contributors.controller';
import HomeController from './home/home.controller.js';

angular.module('ark.twintangents', ['ui.router', 'angularMoment'])
    .config(config)
    .controller('ContributorsController', ContributorsController)
    .controller('HomeController', HomeController);

angular.bootstrap(document.body, ['ark.twintangents'], { strictDi: true });