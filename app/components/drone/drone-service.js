let app = angular.module('drone-tracker'); 

    app.service('DroneService', function ($http) {
    var ds = this;
    
        ds.getAllStrikes = (query, cb)=>{
           var apiUrl = 'https://api.dronestre.am/data' 
           $http.get(apiUrl)
           .then(function(res){
              cb(res)
           },function(err){
             console.log(err)
             })
           }

})
    