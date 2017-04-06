import * as angular from 'angular';
// import notesOverviewComponent from '../../components/notes-overview/notes-overview-component';
import notesViewComponent from '../../components/notes-view/notes-view-component';
import notesNewComponent from '../../components/notes-new/notes-new-component';
import './notes.scss';
import routing from './notes-routes';


class NotesComponent {
    notes: any;

    constructor (private $state: ng.ui.IStateProvider) {
        this.init();
    }

    private init(): void {
        // api.getNotes(userId).then((response) => {
            // this.notes = response.data;
        // })

        this.notes = [
            {   
                id: 123456,
                createdBy: 'Henry Jones',
                title: 'This is a note',
                date: new Date()
            },
            {
                id: 875421,
                createdBy: 'Sarah Smith',
                title: 'This is also a note',
                date: new Date()
            }
        ]
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
    .module('app.notesComponent', [ notesViewComponent, notesNewComponent ])
    .config(routing)
    .component('notesComponent', notesComponent)
    .name;


// para ti Fernando
// broadcast = (val) => {
//     this.$scope.$broadcast('broadcast', val);
// };