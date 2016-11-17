( function()  {
   
   angular
        .module('drone-tracker')
        .component('map', {
            templateUrl: 'app/components/drone/map.html',
            controller: MapController

        })

        MapController.$inject = ['DroneService', 'ngMap']

       function MapController(DroneService){
          let mc = this;

            mc.mapStikes = function(){
                DroneService.getAllStrikes((query, res)=>{
                    console.log(res.data.strikes.lat)
                    console.log(res.data.strikes.lon)
                })
                }
        }



})(); 