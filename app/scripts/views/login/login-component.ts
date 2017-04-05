import * as angular from 'angular';
import './login.scss';
import routing from './login-routes';


class LoginComponent {
    username: String;
    password: String;

    constructor (private $state: ng.ui.IStateProvider) {
        this.init();
    }

    private init(): void {
    }

    login() {
        // if (validate(this.username, hasher(this.password)))
        //redirect to home/notes
        console.log('going home');
        this.$state.go('notes.root');
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
    .name;
