( function()  {
   
   angular
        .module('drone-tracker')
        .component('map', {
            templateUrl: 'app/components/drone/map.html',
            controller: MapController

        })

        MapController.$inject = ['ngMap']

       function MapController(){
          let mc = this;
        }



})(); 