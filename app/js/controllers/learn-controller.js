(function () {

    angular.module('drone-tracker')
        .component('learn', {
            templateUrl: 'partials/learn.html',
            controller: LearnController
        })


    LearnController.$inject = ['DroneService']
    function LearnController(DroneService) {
        var lc = this;

     $('#data-intro').typeIt({
            strings: [
                        'The data on this page is provided via The Bureau of Investigates',
                        'What you see here, you will  <b>not</b> see in the mainstream media.',
                           'What you see here <b>will</b> shock you.'

                     ],
            lifeLike: true,
            loop:false,
            loopDelay:1000,
            speed:80,
            startDelay:600,
            breakDelay: 2000,
            breakLines: true,
            callback: ()=>$('#dr3one-intro').fadeOut(1000)
        });
        setInterval(()=>{
            $('#scroll-down').fadeToggle();
        }, 1000)

        window.mobilecheck = function () {
            var check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };





        lc.graphWidth = window.mobilecheck() ? window.innerWidth-50 : 400;

        ///////////////pie char/////////////
        ///////////////////////////////



        lc.pieData = {
            chart: {
                caption: "US Drone Strikes Per Country ",
                subcaption: "2002 - Present",
                startingangle: "120",
                showlabels: "0",
                showlegend: "1",
                enablemultislicing: "0",
                slicingdistance: "15",
                showpercentvalues: "1",
                showpercentintooltip: "0",
                plottooltext: "Country: $label,    Total strikes : $datavalue",
                theme: "fint"
            },
            data: [
                {
                    label: "Pakistan",
                    value: "429"
                },
                {
                    label: "Somalia",
                    value: "21"
                },
                {
                    label: "Yemen",
                    value: "187"
                },
                {
                    label: "USA",
                    value: "0"
                }

            ]
        }





        //////////////////////////////////
        //////////////////////////////////



        lc.getAll = function () {
            DroneService.getAllStrikes(function (res) {
                // debugger
                console.log(res.data.strike)
                return res.data.strike
            })
        }

////////////////////////
//nv
 lc.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label},
                y: function(d){return d.value + (1e-10) ;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Year'
                },
                yAxis: {
                    axisLabel: 'Strikes',
                    axisLabelDistance: -10
                }
            }
        };

        lc.data = [
            {
                key: "Cumulative Return",
                values: [
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
            }
        ]

    }
})(); 