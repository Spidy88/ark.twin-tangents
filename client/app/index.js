import config from './index.config.js';
import run from './index.run.js';
import ContributorsController from './contributors/contributors.controller';
import HomeController from './home/home.controller.js';

angular.module('ark.twintangents', ['ui.router', 'angularMoment'])
    .config(config)
    .run(run)
    .controller('ContributorsController', ContributorsController)
    .controller('HomeController', HomeController);

angular.element(document).ready(() => {
    angular.bootstrap(document.body, ['ark.twintangents'], {strictDi: true});
});