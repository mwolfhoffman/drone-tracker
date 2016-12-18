'use strict';

angular.module('drone-tracker').directive('lineChart', function () {
    return {
        templateUrl: '/partials/line-chart.html',
        link: function link(scope, elem, attrs) {

            var width = window.innerWidth,
                height = 500;

            var projection = d3.geo.craig().scale(200).center([0, 14]).translate([width / 2, height / 2]);

            var graticule = d3.geo.graticule().step([5, 5]).extent([[-179, -90], [179, 90]]).precision(1);

            var lines = graticule.lines(),
                xLines = lines.filter(function (d) {
                return d.coordinates[0][0] === d.coordinates[1][0];
            }),
                yLines = lines.filter(function (d) {
                return d.coordinates[0][1] === d.coordinates[1][1];
            });

            var canvas = d3.select("#helix").append("canvas").attr("width", width).attr("height", height);

            var context = canvas.node().getContext("2d");

            var path = d3.geo.path().projection(projection).context(context);

            context.lineWidth = 2;

            d3.timer(function (elapsed) {
                projection.parallel(Math.sin(elapsed % 10000 / 10000 * Math.PI) * 25);
                context.clearRect(0, 0, width, height);

                yLines.forEach(function (line) {
                    context.strokeStyle = d3.hsl(line.coordinates[0][1] - 90, 1, .5) + "";
                    context.beginPath();
                    path(line);
                    context.stroke();
                });

                xLines.forEach(function (line) {
                    context.strokeStyle = d3.hsl(line.coordinates[0][0] / 2 + 180, 1, .5) + "";
                    context.beginPath();
                    path(line);
                    context.stroke();
                });
            });
        }
    };
}).component('strikeAnimation', {
    templateUrl: '/partials/strike-animation.html',
    controller: function controller() {
        var newStrikeHTML = function newStrikeHTML() {
            var id = Date.now();
            return '\n                    <style>\n                                @keyframes strike' + id + '{\n                                        0%{\n                                            width:1;\n                                            height:1;\n                                            background:#ff003b;\n                                            opacity:1;\n                                            transform:scale(0)\n                                        }\n                                        100%{\n                                            opacity:0;\n                                            transform:scale(' + Math.random() * 50 + ')\n                                        }\n                                    };\n                    </style>\n                    <div style="\n                                top:' + Math.random() * window.innerHeight + ';\n                                left:' + Math.random() * window.innerWidth + ';\n                                animation:strike' + id + ' 1s;\n                                animation-timing-function:cubic-bezier(.14,.88,.66,.53);\n                                animation-delay:' + Math.floor(1000 * Math.random()) + 'ms;\n                                "\n                                class="strike" \n                                id="strike"\n                                ></div>\n                    ';
        };
        var strikeHTML = '';
        function addStrike() {
            $('#strikeContainer').append(newStrikeHTML());
        }
        var a = setInterval(addStrike, 1000);
    }
}).component('navTouch', {
    templateUrl: '/partials/nav.html',
    controller: function controller() {}
});