import * as angular from 'angular';
import './notes-view.scss';
import NotesService from '../../services/NotesService';

class NotesViewComponent {

    note: any;
    subnotes: Array<Object> = [];
    newNote: String;
    toggleAddNote: Boolean;

    constructor (private $state: ng.ui.IStateService, private NotesService: NotesService) {
        this.init();
    }

    private init(): void {
        this.getNote();

    }

    private getNote(): void {
        this.subnotes = [];
        this.NotesService.getNote(this.$state.params.noteId).then((response) => {
            this.note = response;
            // Store subnotes in an array for easy orderBy angular date sort
            Object.keys(this.note.notes).forEach(key => {
                this.subnotes.push(this.note.notes[key]);
            });
        });
    }

    private submitNote(): void {
        this.NotesService.patchNote(this.newNote, this.$state.params.noteId).then((response) => {
            this.getNote();
            this.toggleAddNote = false;
            this.newNote = '';
        });
    }

    private goBack(): void {
        this.$state.go('notes.root');
    }

}

let notesViewComponent = {
    bindings: {
        name: '='
    },
    template: require('./notes-view.html'),
    controller: NotesViewComponent
};

export default angular
    .module('app.notesViewComponent', [])
    .component('notesViewComponent', notesViewComponent)
    .name;
