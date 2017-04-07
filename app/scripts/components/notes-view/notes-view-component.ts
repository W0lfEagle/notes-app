import * as angular from 'angular';
import './notes-view.scss';
import NotesService from '../../services/NotesService';

class NotesViewComponent {

    note: any;
    newNote: String;
    toggleAddNote: Boolean;

    constructor (private $state: ng.ui.IStateProvider, private NotesService: NotesService) {
        // this.state = $state;
        this.init();
    }

    private init(): void {
        console.log(this.$state.params.noteId)
        this.$state.params;
        this.NotesService.getNote(this.$state.params.noteId).then((response) => {
            this.note = response;
        })

    }

    private submitNote(): void {

        this.NotesService.patchNote(this.newNote, this.$state.params.noteId).then((response) => {
            this.note = response;
            this.toggleAddNote = false;
            this.newNote = '';
        })
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