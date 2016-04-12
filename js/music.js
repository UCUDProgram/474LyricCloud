//start with blank input value on load
$(document).ready(function() {
    $('#search').val('');
});

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
        $scope.update = function(){
        //encode url
          var intext = $('#search').val();
          var nurl = encodeURI("http://api.lyricsnmusic.com/songs?api_key=XnSM7pnaIImshts49PRZ7cybggVAp1ODHg9jsngnpusCzXKxsy&q="+intext);
          console.log(intext);
          console.log(nurl);
          $('#results').removeClass("hidden");  
           
        $http.get(nurl)
        .then(function(response) {
            $scope.title = response.data[0].title;
            $scope.lyrics = response.data[0].snippet;
            $scope.artist = response.data[0].artist.name;
        });
        }
});