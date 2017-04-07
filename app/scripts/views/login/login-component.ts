import * as angular from 'angular';
import './login.scss';
import routing from './login-routes';
import AuthService from '../../services/AuthService';


class LoginComponent {
    username: String;
    password: String;

    // constructor (private $state: ng.ui.IStateProvider) {
    constructor (private $state: ng.ui.IStateProvider, private AuthService: AuthService) {
        this.init();
    }

    private init(): void {
    }

    login() {
        // if (validate(this.username, hasher(this.password)))
        this.AuthService.login(this.username, this.password).then(response => {
            // console.log('going home');
            this.$state.go('notes.root');
        })
    }
}

let loginComponent = {
    template: require('./login.html'),
    controller: LoginComponent
};

export default angular
    .module('app.loginComponent', [])
    .config(routing)
    .component('loginComponent', loginComponent)
    .service('AuthService', AuthService)
    .name;
