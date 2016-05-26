import config from './index.config.js';
import ContributorsController from './contributors/contributors.controller';

angular.module('ark.twintangents', ['ui.router'])
    .config(config)
    .controller('ContributorsController', ContributorsController);

angular.bootstrap(document.body, ['ark.twintangents'], { strictDi: true });