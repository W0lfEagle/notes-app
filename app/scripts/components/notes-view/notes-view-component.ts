import * as angular from 'angular';
import './notes-view.scss';


class NotesViewComponent {

    note: any;
    newNote: String;

    constructor (private $state: ng.ui.IStateProvider, private $http: ng.IHttpService) {
        // this.state = $state;
        this.init();
    }

    private init(): void {
        console.log(this.$state.params.noteId)
        this.$state.params;
        // api.getNote(this.state.params.noteId).then( (repsonse) => {
            // this.note = response.data;
        // })

        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }


        this.note = {
            id: 123456,
            createdBy: 'Henry Jones',
            title: 'This is a note',
            date: randomDate(new Date(2017, 0, 1), new Date(2017, 2, 1)),
            image: '/images/henry.jpg',
            note: 'Lorem ipsum dolor sit amet, noluisse consectetuer ad vim, eu pro numquam partiendo, nam no modo labores appetere. Feugiat insolens deserunt ex sea, at debet argumentum pro, aliquam prodesset theophrastus ea sea. Ne qui sale nonumes, id facer scriptorem usu. Novum tamquam laoreet ea quo. Forensibus appellantur ea pri.',
            notes: [
                {
                    id: 54782,
                    createdBy: 'Sarah Folley',
                    date: randomDate(new Date(2017, 2, 1), new Date()),
                    image: '/images/sarah.jpg',
                    note: 'Lorem ipsum dolor sit amet, eos id consul minimum, debet dicant vituperata est no, qui ad ocurreret gubergren. Vel ne porro feugiat philosophia, porro volutpat comprehensam est et. Commodo alienum copiosae in pri, in eam esse primis ponderum. Mei no wisi impetus disputationi, ex alii delicata sed. Ferri ipsum liber in sed, at vim labore volumus voluptaria, ei atomorum disputationi sea. Ex persius eleifend postulant eam, quo deserunt tractatos an.'
                },
                {
                    id: 885574,
                    createdBy: 'Henry Jones',
                    date: randomDate(new Date(2017, 2, 1), new Date()),
                    image: '/images/henry.jpg',
                    note: 'Lorem ipsum dolor sit amet, te quo stet meliore, est te scaevola ponderum. Te enim copiosae euripidis his, etiam tritani albucius vix te? Quod vero putant mel te, nam sapientem intellegebat id, nec ne vidisse liberavisse. Habeo iuvaret vel an, eos ornatus pertinacia voluptatibus eu. Sed falli labitur eripuit ad, errem voluptatum est at, pri an meliore consectetuer.'
                }
            ]
        };
    }

    private submitNote(): void {
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