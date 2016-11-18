(function () {

  angular.module('drone-tracker')
        .component('learn', {
            templateUrl: 'app/components/drone/learn.html',
            controller: LearnController
                    })


LearnController.$inject =['DroneService']     
    
    function LearnController(DroneService) {
        var hc = this;
           hc.getAll = function(){
        DroneService.getAllStrikes(function(res){
                    // debugger
            console.log(res.data.strike)
            return res.data.strike
        })
        }
       
        }
        




})(); 