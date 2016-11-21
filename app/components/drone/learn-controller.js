(function () {

  angular.module('drone-tracker')
        .component('learn', {
            templateUrl: 'app/components/drone/learn.html',
            controller: LearnController
                    })


    LearnController.$inject =['DroneService']     
    function LearnController(DroneService) {
        var lc = this;

//////////////////////////////
////fusion hard code test///////


lc.myDataSource = {
    chart: {
        caption: "US Drone Strikes Per Year",
        subCaption: "2002- Present",
        // numberSuffix: " strikes",
        theme: "fint"
    },
    data: [
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
    ]
};


////////////////////////////////////
////////////////////////////////////


           lc.getAll = function(){
        DroneService.getAllStrikes(function(res){
                    // debugger
            console.log(res.data.strike)
            return res.data.strike
        })
    }       
  }
   

})(); 