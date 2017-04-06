import * as angular from 'angular';
import './notes-view.scss';
import NotesService from '../../services/NotesService';

class NotesViewComponent {

    note: any;
    newNote: String;

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
        // patch note to db
        this.note.notes.push({
            id: Math.random(),
            createdBy: 'me',
            date: new Date(),
            note: this.newNote
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