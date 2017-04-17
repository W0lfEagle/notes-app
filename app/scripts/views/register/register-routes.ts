function routing($stateProvider: ng.ui.IStateProvider) {

    $stateProvider
        .state('register', <ng.ui.IState>{
            abstract: true,
            views: {
                'content@': { 'template': null }
            }
        })
        .state('register.root', <ng.ui.IState>{
            parent: 'register',
            url: '/register',
            views: {
                'content@': { template: '<register-component></register-component>' }
            }
        });
}

export default routing;
