function routing($stateProvider: ng.ui.IStateProvider) {

    $stateProvider
        .state('login', <ng.ui.IState>{
            abstract: true,
            views: {
                'content@': { 'template': null }
            }
        })
        .state('login.root', <ng.ui.IState>{
            parent: 'login',
            url: '/login',
            views: {
                'content@': { template: '<login-component></login-component>' }
            }
        });
}

export default routing;
