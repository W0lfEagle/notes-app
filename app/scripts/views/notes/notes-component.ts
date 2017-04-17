import * as angular from 'angular';
import 'angular-ui-router';

import notesViewComponent from '../../components/notes-view/notes-view-component';
import notesNewComponent from '../../components/notes-new/notes-new-component';
import NotesService from '../../services/NotesService';
import AuthService from '../../services/AuthService';
import './notes.scss';
import routing from './notes-routes';


class NotesComponent {
    notes: Array<Object>;

    constructor (
        private $state: ng.ui.IStateService,
        private NotesService: NotesService,
        private AuthService: AuthService) {
            this.init();
        }

    private init(): void {
        this.NotesService.getNotes().then((response) => {
            this.notes = [];
            Object.keys(response).forEach(key => {
                response[key].id = key;
                this.notes.push(response[key]);
            });
        });
    }

    private createNote(): void {
        this.$state.go('notes.new');
    }

    private viewNote(noteId): void {
        this.$state.go('notes.view', {noteId: noteId});
    }

    private logout(): void {
        this.AuthService.logout();
        this.$state.go('login.root');
    }

}

let notesComponent = {
    template: require('./notes.html'),
    controller: NotesComponent
};

export default angular
    .module('app.notesComponent', [ notesViewComponent, notesNewComponent])
    .config(routing)
    .component('notesComponent', notesComponent)
    .service('NotesService', NotesService)
    .name;


// para ti Fernando
// broadcast = (val) => {
//     this.$scope.$broadcast('broadcast', val);
// };
