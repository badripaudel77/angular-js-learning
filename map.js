console.log(">>> Angular JS App has loaded. Map API testing :) ");

function myMapController($scope) {
    $scope.title = "This is Google Map API";
    $scope.initializeMap = function() {
        console.log(">>> Initializing Map");
        new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
    });
    console.log(">>> Map initialized");
 }
    $scope.initializeMap();
}