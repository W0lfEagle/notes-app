import * as angular from 'angular';
import './register.scss';
import routing from './register-routes';
import AuthService from '../../services/AuthService';


class RegisterComponent {
    name: String;
    email: String;
    password: String;

    constructor (private $state: ng.ui.IStateService, private AuthService: AuthService) {
    }

    private register(): void {
        let user = {
            email: this.email,
            password: this.password,
            name: this.name
        };
        this.AuthService.register(user).then(response => {
            this.AuthService.updateProfile(user).then(result => {
                this.$state.go('notes.root');
            }).catch(error => {
                alert(error);
            });
        }).catch(err => {
            alert(err);
        });
    }

    private login(): void {
        this.$state.go('login.root');
    }

}

let registerComponent = {
    template: require('./register.html'),
    controller: RegisterComponent
};

export default angular
    .module('app.registerComponent', [])
    .config(routing)
    .component('registerComponent', registerComponent)
    .service('AuthService', AuthService)
    .name;
