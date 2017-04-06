import * as angular from 'angular';

import loginComponent from './scripts/views/login/login-component';
import notesComponent from './scripts/views/notes/notes-component';
import routing from './app-routes';
import 'angular-ui-router';
import './app.scss';
import 'ngstorage';

angular
    .module('app', [
        'ui.router',
        loginComponent,
        notesComponent,
        'ngStorage'
    ])
    .config(routing);

angular.bootstrap(document.documentElement, ['app']);
