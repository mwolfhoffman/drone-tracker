( function()  {
   
   angular
        .module('drone-tracker')
        .component('map', {
            templateUrl: 'app/components/drone/map.html',
            controller: MapController

        })

        MapController.$inject = ['DroneService']

       function MapController(){
          let mc = this;

          mc.getAll=()=>{
                DroneService.mapStrikes((res)=>{
                    let allStrikes = [];
                    let strike = res.data.strike
                    strike.forEach((s)=>{
                        allStrikes.push(s)
                        //use strike.lat / strike.lon; //
                        return allStrikes;
                    })    
                })
              }
          }
        



})(); 