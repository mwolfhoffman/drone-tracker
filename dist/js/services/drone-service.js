'use strict';

var app = angular.module('drone-tracker');

app.service('DroneService', function ($http) {
  var ds = this;
  var url = '//bcw-getter.herokuapp.com/?url=';
  var url2 = 'http://api.dronestre.am/data';
  var apiUrl = url + encodeURIComponent(url2);

  ds.getAllStrikes = function (query, cb) {
    $http.get(apiUrl).then(function (res) {
      cb(res);
    }, function (err) {
      console.log(err);
    });
  };

  ds.mapStrikes = function (cb) {
    $http.get(apiUrl).then(function (res) {
      cb(res);
    }, function (err) {
      console.log(err);
    });
  };
});