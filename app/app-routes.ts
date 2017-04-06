
function routing($locationProvider: ng.ILocationProvider,
                $stateProvider: angular.ui.IStateProvider,
                $urlRouterProvider: angular.ui.IUrlRouterProvider) {

    // html5 removes the need for # in URL
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/login');
    // $urlRouterProvider.otherwise('/notes/view');
}

export default routing;
