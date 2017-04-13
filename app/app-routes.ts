
function routing($locationProvider: ng.ILocationProvider,
                $stateProvider: ng.ui.IStateProvider,
                $urlRouterProvider: ng.ui.IUrlRouterProvider) {

    // html5 removes the need for # in URL
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/login');
    // $urlRouterProvider.otherwise('/notes/view');
}

export default routing;
