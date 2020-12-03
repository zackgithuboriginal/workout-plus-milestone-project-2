//initialising variables
let map;
let mapLocation;
let service;   
let infoWindow;
let currentInfoWindow;
let geocoder;
let options;
let currentMarkers = [];
let gymDetailsDOM = {
    gymDetails: $("#information-box"),
    gymName: document.querySelector(".location-name"),
    gymAddress: document.querySelector(".location-address"),
    gymRating: document.querySelector(".location-rating"),
    gymWebsite: document.querySelector(".location-website"),
    gymPhoto: document.querySelector(".location-image"),
}

// Handles the initial map creation
function initMap() {
    infoWindow = new google.maps.InfoWindow;
    currentInfoWindow = infoWindow;
    geocoder = new google.maps.Geocoder();
    mapLocation =  {lat: 53.3498, lng: -6.2603};
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 15,
        mapTypeControl: false,
        rotateControl: false,
        mapId: '6be0d83f76395e4'
    });

// Handles autocomplete requests on address input
    let input = document.getElementById("address-input");
    let autocomplete = new google.maps.places.Autocomplete(input, options);
    options = {
        types: ['address']
    }
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
            let place=autocomplete.getPlace();
            if (!place.geometry){
                return;
            }
            else if (place.geometry) {
                repositionMap(place.geometry.location) 
            }
        });
    findLocalGyms(mapLocation);
};

// Handles the repositioning of the map due to search or geolocation
function repositionMap(mapLocation) {
    map.setCenter(mapLocation);
    findLocalGyms(mapLocation);
}

// Listens to the search input form and returns false on submission to prevent the page from refreshing
$(document).ready(function() {
    $(document).on('submit', '#address-form', function() {
        searchAddress();
        return false;
     });
});

// Handles geocoder request
function searchAddress() {
    let address = document.getElementById('address-input').value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status == 'OK') {
        repositionMap(results[0].geometry.location);
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
        document.getElementById('address-input').value="";
    });
}

// Handles geolocation request
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

// Handles placeservice request whenever the map repositions or intialises
  function findLocalGyms(userLocation) {
    let request = {
        location: userLocation,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'gym'
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, markLocations);

    deleteMarkers();
};

// Callback function for nearbySearch method, loops through results
function markLocations(results, status) {
    if(status == google.maps.places.PlacesServiceStatus.OK){
        for(var i = 0; i<results.length; i++){
            createMarker(results[i]);
        }
    }
}

// Handles the creation of markers on each identified result
function createMarker(gym) {
    let marker = new google.maps.Marker({
      map: map,
      title: gym.name,
      position: gym.geometry.location,
    });
    currentMarkers.push(marker);

// Upon clicking a marker this will request properties of the place object
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

// Displays basic info in an infowindow above marker when marker is clicked
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

// Displays more extensive info in side panel when marker is clicked
function showGymDetails(gym) {

    if (gym.rating != null) {
        gymDetailsDOM.gymRating.textContent = `Rating: ${gym.rating}`
    } else {
        gymDetailsDOM.gymRating.textContent = "Rating: Not yet rated."
    };

    if(gym.website) {
        gymDetailsDOM.gymWebsite.innerHTML =`${gym.name}'s Website`
        gymDetailsDOM.gymWebsite.href = gym.website
        gymDetailsDOM.gymWebsite.target ="_blank"
    } else {
        gymDetailsDOM.gymWebsite.innerHTML = ""
        gymDetailsDOM.gymWebsite.href = ""
        gymDetailsDOM.gymWebsite.target = ""
    }

    if (gym.photos != null) {
    let firstPhoto = gym.photos[0];
    gymDetailsDOM.gymPhoto.alt=  `Photo of ${gym.name}`
    gymDetailsDOM.gymPhoto.src = firstPhoto.getUrl();
    } else {
        gymDetailsDOM.gymPhoto = "";
        gymDetailsDOM.gymPhoto.src = "";
    }

    gymDetailsDOM.gymName.textContent = gym.name;
    gymDetailsDOM.gymAddress.textContent = gym.formatted_address;

    gymDetailsDOM.gymDetails.css("display", "inline-block")
}

function hideInformation() {
    gymDetailsDOM.gymDetails.css("display", "none")
}

function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  currentMarkers = [];
}

function setMapOnAll(map) {
  for (let i = 0; i < currentMarkers.length; i++) {
    currentMarkers[i].setMap(map);
  }
}

