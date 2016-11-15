(()=>{

let app = angular.module('drone-tracker')
    .config(
        function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state({
                name: 'home',
                url: '/home?' + Date.now(),
                template: '<home></home>', 
            })
            .state({
                name: 'search',
                url: '/search',
                template: '<search></search>' 
            })
            .state({
                name: 'learn',
                url: '/learn',
                template: '<learn></learn>' 
            }) 
                $urlRouterProvider.otherwise('/home?' + Date.now())
            }) 


})();