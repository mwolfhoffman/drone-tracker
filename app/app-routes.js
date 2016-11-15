(()=>{

let app = angular.module('drone-tracker')
    .config(
        function($stateProvider, $urlRouterProvider) {
        
                $urlRouterProvider.otherwise('/home')
        
        $stateProvider
            .state({
                name: 'home',
                url: '/home',
                template: '<home></home>', 
            })
            .state({
                name: 'search',
                url: '/search',
                template: '<search></search>' 
            }) 
            .state({
                name: 'map',
                url: '/map',
                template: '<map></map>' 
            })
            .state({
                name: 'learn',
                url: '/learn',
                template: '<learn></learn>' 
            })

        })
        

             


})(); 