let map;
let mapLocation;
let gymDetails;
let service;   
let infoWindow;
let currentInfoWindow;

function initMap() {
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;
    gymDetails = $("#information-box");
    mapLocation =  {lat: 53.3498, lng: -6.2603};
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 15,
    });

    findLocalGyms(mapLocation);
};

function repositionMap(location) {
    map.setCenter(location);
    findLocalGyms(location);
}

function getGeoLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
           userLocation = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
           }
           repositionMap(userLocation);
    });
}
}

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

function displayDetails(placeResult, marker, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    let placeInfowindow = new google.maps.InfoWindow();
    placeInfowindow.setContent('<div>' + '<span class="gym-info-title">' + placeResult.name + '</span>' + '</div>');
    placeInfowindow.open(marker.map, marker);
    currentInfoWindow.close();
    currentInfoWindow = placeInfowindow;
    showGymDetails(placeResult);
    } else {
    console.log('displayDetails failed: ' + status);
    }
}

function showGymDetails(gym) {
    let gymName = document.querySelector(".location-name");
    let gymAddress = document.querySelector(".location-address");
    let gymRating = document.querySelector(".location-rating");
    let gymWebsite = document.querySelector(".location-website");
    let gymPhoto = document.querySelector(".location-image");

    if (gym.rating != null) {
        gymRating.textContent = gym.rating
    } else {
        gymRating.textContent = "Not yet rated."
    };

    if(gym.website) {
        gymWebsite.innerHTML =`${gym.name}'s Website`
        gymWebsite.href = gym.website
        gymWebsite.target ="_blank"
    } else {
        gymWebsite.innerHTML = ""
        gymWebsite.href = ""
        gymWebsite.target = ""
    }

    if (gym.photos != null) {
    let firstPhoto = placeResult.photos[0];
    gymPhoto.alt=  ``
    gymPhoto.src = firstPhoto.getUrl();
    } else {
        gymPhoto = "";
        gymPhoto.src = "";
    }


    gymName.textContent = gym.name;
    gymAddress.textContent = gym.formatted_address;

    gymDetails.css("display", "inline-block")
}