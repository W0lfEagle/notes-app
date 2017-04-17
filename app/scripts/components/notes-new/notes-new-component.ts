import * as angular from 'angular';
import './notes-new.scss';
import NotesService from '../../services/NotesService';


class NotesNewComponent {
    title: String;
    note: String;

    constructor (private $state: ng.ui.IStateService, private NotesService: NotesService) {
    }

    private addNote() {
        console.log('submitting note');
        let newNote = {
            title: this.title,
            note: this.note
        };
        this.NotesService.postNote(newNote).then((response) => {
            this.$state.go('notes.root');
        });
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
