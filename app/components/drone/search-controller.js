(function () {

    angular.module('drone-tracker')
        .component('search', {
            templateUrl: 'app/components/drone/search.html',
            controller: SearchController
        })

    SearchController.$inject = ['DroneService']
    function SearchController(DroneService) {
        let sc = this;
        sc.arr = [];
        sc.currentPage = 1;
        sc.pageSize = 10;



        sc.searchByCountry = function (country) {
            $('#country-button').text('Loading Strikes...');
                $('#resultId').html(`  <div class="preloader-wrapper small active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`)
            sc.resetAll()
            DroneService.getAllStrikes(country, function (res) {
                var strikes = res.data.strike;
                strikes.forEach(function (i) {
                    if (i.country == country) {
                        sc.arr.push(i)
                    }
                })

                $('#country-button').text('Search');
                $('#resultId').empty()
                let len = sc.arr.length
                return sc.arr
            })
        }

        sc.searchByYear = function (year) {
            $('#year-button').text('Loading Strikes...');

              $('#resultId').html(`  <div class="preloader-wrapper small active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`)

            sc.resetAll()
            DroneService.getAllStrikes(year, function (res) {
                var strikes = res.data.strike;
                strikes.forEach(function (i) {
                    if (i.date.slice(0, 4) == year) {
                        sc.arr.push(i)
                    }
                })
                   $('#resultId').empty()
                $('#year-button').text('Search');
                let len = sc.arr.length
                console.log(sc.arr)
                return sc.arr

            })

        }
        sc.resetAll = function () {
            sc.arr = [];
            return sc.arr;
        }

    }






})();





