// UI router for you Martins

function routing($stateProvider: angular.ui.IStateProvider) {

    $stateProvider
        .state('notes', <ng.ui.IState>{
            abstract: true,
            views: {
                'content@': { 'template': null }
            }
        })
        .state('notes.root', <ng.ui.IState>{
            parent: 'notes',
            url: '/notes',
            views: {
                'content@': { template: '<notes-component></notes-component>' }
            }
        })
        .state('notes.new', <ng.ui.IState>{
            parent: 'notes',
            url: '/notes/new',
            views: {
                'content@': { template: '<notes-new-component></notes-new-component>' }
            }
        })
        .state('notes.view', <ng.ui.IState>{
            parent: 'notes',
            url: '/notes/view/:noteId',
            views: {
                'content@': { template: '<notes-view-component></notes-view-component>' }
            }
            // params: [ 'noteId' ]
        });
}

export default routing;
