let map;
let mapLocation;
let gymDetails;
let service;

function getGeoLocation() {
    if(navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(initMap);
    } else {
        console.log("nope")
    } 
}

function initMap(userLocation) {
    gymDetails = $("#information-box");
    if (userLocation){
        mapLocation =  {lat: userLocation.coords.latitude, lng: userLocation.coords.longitude};
    } else {
        mapLocation =  {lat: 51.8985, lng: -81.4756};
    }
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 15,
    });

    findLocalGyms(mapLocation);
};

function findLocalGyms(userLocation) {
    let request = {
        location: userLocation,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'gym'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, markLocations);
};

function markLocations(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK){
        for(var i = 0; i<results.length; i++){
            createMarker(results[i]);
        }
    }
}

function createMarker(gym) {
    let marker = new google.maps.Marker({
      map: map,
      title: gym.name,
      position: gym.geometry.location,
    });

    google.maps.event.addListener(marker, 'click', () => {
    let request = {
    placeId: gym.place_id,
    fields: ['name', 'formatted_address', 'geometry', 'rating',
        'website', 'photos']
    };

    service.getDetails(request, (placeResult, status) => {
        displayDetails(placeResult, marker, status)
    })
});
}