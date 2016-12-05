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
<<<<<<< HEAD:app/app-routes.js
            .state({
                name: 'map',
                url: '/map',
                template: '<map></map>' 
            })
  
=======
             .state({
                name: 'learn',
                url: '/learn',
                template: '<learn></learn>' 
            })
           
>>>>>>> 2afe00c3d26697b7e22746a15939fc298f708b49:app/js/app-routes.js

        })
        

             


})(); 