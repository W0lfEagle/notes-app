import * as angular from 'angular';
import 'angular-ui-router';

import notesViewComponent from '../../components/notes-view/notes-view-component';
import notesNewComponent from '../../components/notes-new/notes-new-component';
import NotesService from '../../services/NotesService';
import './notes.scss';
import routing from './notes-routes';


class NotesComponent {
    notes: any;

    constructor (private $state: ng.ui.IStateService, private NotesService: NotesService) {
        this.init();
    }

    private init(): void {
        this.NotesService.getNotes().then((response) => {
            // this.notes = [];
            this.notes = response;
        });
    }

    private createNote(): void {
        this.$state.go('notes.new');
    }

    private viewNote(noteId): void {
        // console.log('Viewing note:',noteId)
        this.$state.go('notes.view', {noteId: noteId});
    }

    private logout(): void {
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
