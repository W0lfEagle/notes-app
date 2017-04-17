import * as angular from 'angular';

import loginComponent from './scripts/views/login/login-component';
import registerComponent from './scripts/views/register/register-component';
import notesComponent from './scripts/views/notes/notes-component';
import routing from './app-routes';
import 'angular-ui-router';
import './app.scss';
import './bower_components/angular-gravatar/build/angular-gravatar.js';

angular
    .module('app', [
        'ui.router',
        loginComponent,
        registerComponent,
        notesComponent,
        'ui.gravatar'
    ])
    .config(routing);

angular.bootstrap(document.documentElement, ['app']);
