import * as angular from 'angular';
import './notes-view.scss';
import NotesService from '../../services/NotesService';

class NotesViewComponent {

    note: any;
    subnotes: Array<Object> = [];
    newNote: String;
    toggleAddNote: Boolean;
    noteId: String;

    constructor (private $state: ng.ui.IStateService, private NotesService: NotesService) {
        this.init();
    }

    private init(): void {
        this.noteId = this.$state.params.noteId;
        this.getNote();
    }

    private getNote(): void {
        this.subnotes = [];
        this.NotesService.getNote(this.noteId).then((response) => {
            this.note = response;
            // Store subnotes in an array for easy orderBy angular date sort
            Object.keys(this.note.notes).forEach(key => {
                this.subnotes.push(this.note.notes[key]);
            });
        });
    }

    private submitNote(): void {
        this.NotesService.patchNote(this.newNote, this.noteId).then((response) => {
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
