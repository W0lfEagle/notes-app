import * as angular from 'angular';
import './login.scss';
import routing from './login-routes';
import AuthService from '../../services/AuthService';


class LoginComponent {
    username: String;
    password: String;

    constructor (private $state: ng.ui.IStateService, private AuthService: AuthService) {
    }

    private login(): void {
        this.AuthService.login(this.username, this.password).then(response => {
            this.$state.go('notes.root');
        });
    }

    private register(): void {
        console.log('registering');
        this.$state.go('register.root');
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
