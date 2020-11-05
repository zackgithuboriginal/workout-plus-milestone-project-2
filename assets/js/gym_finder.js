let map;
let mapLocation;

function initMap() {
    mapLocation =  {lat: 51.8985, lng: -8.4756};
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 10,
    });
};

