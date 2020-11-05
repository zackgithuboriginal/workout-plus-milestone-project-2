let map;
let mapLocation;

function initMap(userLocation) {
    if (userLocation){
       mapLocation =  {lat: userLocation.coords.latitude, lng: userLocation.coords.longitude};
    } else {
        mapLocation =  {lat: 51.8985, lng: -81.4756};
    }
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 10,
    });
};

function getGeoLocation() {
    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(initMap);
    } else {
        console.log("nope")
    } 
}