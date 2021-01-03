//initialising variables
let map;
let mapLocation;
let service;   
let infoWindow;
let currentInfoWindow;
let geocoder;
let options;
let autocomplete;
let currentMarkers = [];
let gymDetails = $("#information-box")
let selectTarget = document.getElementById("country");
let gymDOM = {
    name: document.querySelector(".location-name"),
    formatted_address: document.querySelector(".location-address"),
    rating: document.querySelector(".location-rating"),
    website: document.querySelector(".location-website"),
    photos: document.querySelector(".location-image")
}

function parseCountryCodes() {
    console.log("Parse Begin")
    Papa.parse("assets/data/country-codes.csv", {
        download: true,
        complete: function(results){
            console.log("Complete")
            createCountryOptions(results.data)
        }
    });
};

function createCountryOptions(results){
    for(i=0; i<results.length; i++){
        let newOption = document.createElement("option")
        newOption.innerText = results[i][1]
        newOption.value = results[i][0]
        selectTarget.append(newOption);
    }
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
    parseCountryCodes();
    document.getElementById("country").addEventListener("change", setAutocompleteCountry);

// Handles autocomplete requests on address input
    let input = document.getElementById("address-input");
    autocomplete = new google.maps.places.Autocomplete(input, {
        types: ['address']
    });
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

function setAutocompleteCountry() {
  const targetCountry = selectTarget.value;
  if (country == "all") {
    autocomplete.setComponentRestrictions({ country: [] });
  } else {
    autocomplete.setComponentRestrictions({ country: targetCountry });
  }
}

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
      icon: {
        path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
        fillColor: '#F39237',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: .075
      }
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
    if(!gym.photos){
        renderAltValue("photos");
    }
    if(!gym.rating){
        renderAltValue("rating");
    }
    if(!gym.website){
        renderAltValue("website")
    }
    for (const prop in gym) {
        renderGymDetail(prop, gym[prop]);
    }
}

function renderGymDetail(property, value) {
    if(gymDOM[property]){
        let DOMTarget = gymDOM[property];
        if(property === "photos") {
            for(i=0; i<value.length; i++){
                if(value[i].height < value[i].width){
                    DOMTarget.alt = `Photo of location`
                    DOMTarget.src = value[i].getUrl();
                    break;
                } else if(i === value.length){
                    DOMTarget.alt = "Alternative image";
                    DOMTarget.src = "/assets/images/workout-plus.png";
                }
            }    
        }   else if(property === "website") {
            DOMTarget.innerHTML = value;
            DOMTarget.href = value;
            DOMTarget.classList.remove("website-unavailable")
            document.getElementById("website-alternative").classList.add("website-unavailable");
        }   else {
            DOMTarget.textContent = value;
        }
        
    }
    gymDetails.css("display", "inline-block")
}


function renderAltValue(property) {
        let DOMTarget = gymDOM[property];
            if(property === "photos") {
                DOMTarget.alt = "Alternative image";
                DOMTarget.src = "assets/images/workout-plus.png";
            } else if(property === "website"){
                DOMTarget.innerHTML = "No available website";
                DOMTarget.href = "";
                DOMTarget.classList.add("website-unavailable")
                document.getElementById("website-alternative").classList.remove("website-unavailable");
            } else if(property === "rating"){
                DOMTarget.textContent = "Not yet rated."
            }
        }

//Hides the gym details section when button is clicked
function hideInformation() {
    gymDetails.css("display", "none")
}

//Handles the clearing of the existing markers array, calls function to clear markers from map
function deleteMarkers() {
  clearMarkers();
  currentMarkers = [];
}

function clearMarkers() {
  setMapOnAll(null);
}

//Loops through current markers and sets their location to null, removing them from map
function setMapOnAll(map) {
  for (let i = 0; i < currentMarkers.length; i++) {
    currentMarkers[i].setMap(map);
  }
}

