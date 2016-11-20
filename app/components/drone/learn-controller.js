(function () {

  angular.module('drone-tracker')
        .component('learn', {
            templateUrl: 'app/components/drone/learn.html',
            controller: LearnController
                    })


    LearnController.$inject =['DroneService']     
    function LearnController(DroneService) {
        var lc = this;

/////HARD CODED STRIKES/YR GRAPH/////
 lc.width = 600;
    lc.height = 350;
    lc.yAxis = 'Number of Drone Strikes';
    lc.xAxis = 'Year';
    
    // Data 

    lc.data = [
      {
      label: '2002',
      value: 1
      },
      {
      label: '2003',
      value: 0
      },
      {
      label: '2004',
      value: 1
      },
      {
      label: '2005',
      value: 3
      },
      {
      label: '2006',
      value: 3
      },
      {
      label: '2007',
      value: 5
      },
      {
      label: '2008',
      value: 38
      },
      {
      label: '2009',
      value: 56
      },
      {
      label: '2010',
      value: 129
      },
      {
      label: '2011',
      value: 104
      },
      {
      label: '2012',
      value: 113
      },
      {
      label: '2013',
      value: 61
      },
         {
      label: '2014',
      value: 54
      },
         {
      label: '2015',
      value: 41
      },
         {
      label: '2016',
      value: 19
      },
    ];
    
    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    lc.max = 0;
    
    var arrLength = lc.data.length;
    for (var i = 0; i < arrLength; i++) {
        // Find Maximum X Axis Value
        if (lc.data[i].value > lc.max)
        lc.max = lc.data[i].value;
    }
   
///////////////////////////////




           lc.getAll = function(){
        DroneService.getAllStrikes(function(res){
                    // debugger
            console.log(res.data.strike)
            return res.data.strike
        })
    }       
  }
   

})(); 