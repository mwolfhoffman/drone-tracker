let app = angular.module('drone-tracker'); 

    app.service('DroneService', function ($http) {
    var ds = this

      ds.getAllStrikes = (query, cb)=>{
        var url = '//bcw-getter.herokuapp.com/?url=';
        var url2 = 'http://api.dronestre.am/data' ;
        var apiUrl = url + encodeURIComponent(url2);

           var apiUrl = 
           $http.get(apiUrl)
           .then(function(res){
              cb(res)
           },function(err){
             console.log(err)
             })
           }

  ds.mapStrikes = (cb)=>{
        var url = '//bcw-getter.herokuapp.com/?url=';
        var url2 = 'http://api.dronestre.am/data' ;
        var apiUrl = url + encodeURIComponent(url2);

           var apiUrl = 
           $http.get(apiUrl)
           .then(function(res){
              cb(res)
           },function(err){
             console.log(err)
             })
           }




})
    