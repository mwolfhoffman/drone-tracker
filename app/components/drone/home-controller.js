(function () {

  angular.module('drone-tracker')
        .component('home', {
            templateUrl: 'app/components/drone/home.html',
            controller: HomeController
                    })


                    
    HomeController.$inject = ['DroneService']
    
    function HomeController(DroneService) {
        var hc = this;
        hc.getAll = function(){
        DroneService.getAllStrikes(function(res){
                    // debugger
            console.log(res.data.strike)
            return res.data.strike
        })
        }
        hc.getPakistan = ()=>{ 
            DroneService.getPakistan()
        }


}

})(); 