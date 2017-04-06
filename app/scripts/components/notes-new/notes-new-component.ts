import * as angular from 'angular';
import './notes-new.scss';
// import people, {IPeople} from '../../services/people';
import {NotesService} from '../../services/NotesService';


class NotesNewComponent {
    title: String;
    note: String;

    constructor (private $state: ng.ui.IStateProvider, private NotesService: NotesService) {
        this.init();
        console.log(NotesService.postNote({title: 'newNote'}));
    }

    private init(): void {
        console.log('Example Component initialized');
    }

    private addNote() {
        console.log('submitting note');
        // api.postNote({title: title, note: note, date: new Date()}).then(=> {
            this.$state.go('notes.root');

        // })
    }

    private goBack() {
        this.$state.go('notes.root');
    }
}

let notesNewComponent = {
    bindings: {
        name: '='
    },
    template: require('./notes-new.html'),
    controller: NotesNewComponent
};

export default angular
    .module('app.notesNewComponent', [])
    .component('notesNewComponent', notesNewComponent)
    .name;
