import * as angular from 'angular';
// import notesOverviewComponent from '../../components/notes-overview/notes-overview-component';
import notesViewComponent from '../../components/notes-view/notes-view-component';
import notesNewComponent from '../../components/notes-new/notes-new-component';
import NotesService from '../../services/NotesService';
import './notes.scss';
import routing from './notes-routes';
// import 'ngstorage';
// import '../../services/SimpleStore';


class NotesComponent {
    notes: any;

    constructor (private $state: angular.ui.IStateProvider, private NotesService: NotesService) {
        this.init();
        // this.notes = [{one: 2}]
    }

    private init(): void {
        this.NotesService.getNotes().then((response) => {
            this.notes = response;
            console.log(this.notes)
        })
    }

    private createNote(): void {
        this.$state.go('notes.new');

    }

    private viewNote(noteId): void {
        console.log('Viewing note:',noteId)
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