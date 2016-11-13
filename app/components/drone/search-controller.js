( function()  {
   
   angular.module('drone-tracker')
        .component('search', {
            templateUrl: 'app/components/drone/search.html',
            controller: SearchController

        })

            SearchController.$inject = ['DroneService']
        function SearchController(DroneService){
              let sc=this;
               sc.arr = [];      
        
                    sc.searchByCountry=function(country){
                    DroneService.getAllStrikes(country, function(res){
                        // debugger 
                    var strikes= res.data.strike; 
                    strikes.forEach(function(i){
                        if(i.country == country){
                            sc.arr.push(i)
                    }
                })
                    console.log(sc.arr)
                    return sc.arr
            })       
                    }
   
                sc.searchByYear=function(year){
                    DroneService.getAllStrikes(year, function(res){
                        // debugger 
                    var strikes= res.data.strike; 
                    strikes.forEach(function(i){
                        if(i.date.slice(0,4) == year){
                            sc.arr.push(i)
                    }
                })
                    console.log(sc.arr)
                    return sc.arr
            })
            
                    }

        }

 })(); 