/** initialising variables */
let map;
let mapLocation;
let service;
let infoWindow;
let currentInfoWindow;
let geocoder;
let autocomplete;
let currentMarkers = [];
let gymDetails = $("#information-box");
let selectTarget = document.getElementById("country");
let gymDOM = {
    name: document.querySelector(".location-name"),
    formatted_address: document.querySelector(".location-address"),
    rating: document.querySelector(".location-rating"),
    website: document.querySelector(".location-website"),
    photos: document.querySelector(".location-image")
};

/**
 * This function is the callback function called on the load of Google maps api script
 * It initialises the map with desired settings and sets the detault location to Dublin, Ireland 
 */
function initMap() {
    infoWindow = new google.maps.InfoWindow();
    currentInfoWindow = infoWindow;
    geocoder = new google.maps.Geocoder();
    mapLocation = { lat: 53.3498, lng: -6.2603 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        mapId: "6be0d83f76395e4"
    });
    /**  This section calls the function to populate the country selection list and places an event listener to listen for a coutnry selection */
    parseCountryCodes();
    document.getElementById("country").addEventListener("change", setAutocompleteCountry);

    /** This section handles autocomplete requests on address input field input */
    let input = document.getElementById("address-input");
    autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["address"]
    });
    google.maps.event.addListener(autocomplete, "place_changed", function () {
        let place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }
        else if (place.geometry) {
            repositionMap(place.geometry.location);
        }
    });
    /** It calls a function to request a place request on the default map location */
    findLocalGyms(mapLocation);
}

/**
 * The functions parses the CSV file containing full country list and associated country codes
 * Outputs result object containing countries as individual objects
 */
function parseCountryCodes() {
    Papa.parse("assets/data/country-codes.csv", {
        download: true,
        complete: function (results) {
            createCountryOptions(results.data);
        }
    });
}

/**
 * This function processes each country object and outputs the data as html option elements for a select input field
 * the country's attributes of ISO two character code, latitude, and longitude are set as values of the element
 */
function createCountryOptions(results) {
    for (let i = 0; i < results.length; i++) {
        let newOption = document.createElement("option");
        newOption.innerText = results[i][1];
        newOption.value = [results[i][0], results[i][2], results[i][3]];
        selectTarget.append(newOption);
    }
}

/**
 * This function is called when a country is selected
 * It sets the autocomplete country restriction to the chosen value
 * It also takes the coordinate values of the country, and calls for a repositioning of the map to those coordinates
 * It also calls a function to clear the search input field to reset the search
 * It will not attempt to reposition if the country selection is set back to default value
 */
function setAutocompleteCountry() {
    let targetCountry = selectTarget.value.split(",");
    let targetCoordinates = { lat: parseFloat(targetCountry[2]), lng: parseFloat(targetCountry[1]) }
    if (targetCountry[0] !== "all") {
        repositionMap(targetCoordinates, true);
    }
    clearField();
    if (targetCountry === "all") {
        autocomplete.setComponentRestrictions({ country: [] });
    } else {
        autocomplete.setComponentRestrictions({ country: targetCountry[0] });
    }
}

/**
 * This function clears the search input field when called
 */
function clearField() {
    document.getElementById("address-input").value = "";
}

/**
 * This function handles the respositioning of the map
 * as a result of a search, a geolocation request or a change to the selected search country
 * if it's a reposition due to country selection change the zoom will be further to show more of the country
 */
function repositionMap(mapLocation, zoom) {
    map.setCenter(mapLocation);
    if (zoom) {
        map.setZoom(8)
    } else {
        map.setZoom(15)
    };
    findLocalGyms(mapLocation);
}

/**
 * This function listens to the search input form and stops the page refreshing on form submission
 * It also calls a function to handle the value input in the form in case an autocomplete option is not selected
 */
$(document).ready(function () {
    $(document).on("submit", "#address-form", function () {
        searchAddress();
        return false;
    });
});

/**
 * This function handles the geocoder request if an autocomplete option is not selected
 * it uses the country selection option chosen to bias search results
 */
function searchAddress() {
    let address = document.getElementById("address-input").value;
    let targetCountry = selectTarget.value;
    let searchProperties;
    if (targetCountry === "all") {
        searchProperties = { "address": address };
    } else {
        searchProperties = {
            "address": address, componentRestrictions: {
                country: targetCountry
            },
        };
    }
    geocoder.geocode(searchProperties, function (results, status) {
        if (status === "OK") {
            repositionMap(results[0].geometry.location);
        } else {
            console.log("Geocode was not successful for the following reason: " + status);
        }
        document.getElementById("address-input").value = "";
    });
}

/**
 * This function handles a geolocation request using the geolocator api
 * Makes a request to the user to use their IP address as the coordinates for a map search
 */
function getGeoLocation() {
    let userLocation;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            repositionMap(userLocation);
        });
    }
}

/**
 * This function handles the google places request whenever the map repositions
 * Calls a function to create markers on each result location
 * Also calls function to clears previous markers to prevent the map becoming populated with unecessary markers
 */
function findLocalGyms(userLocation) {
    let request = {
        location: userLocation,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: "gym"
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, markLocations);

    deleteMarkers();
}

/**
 * This function takes the results of the nearbySearch request and calls a function to place a marker on each one
 */
function markLocations(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

/**
 * This function takes each location result and places a marker with a custom marker icon on it's location
 * and then adds the marker to the list containing all the markers
 */
function createMarker(gym) {
    let marker = new google.maps.Marker({
        map: map,
        title: gym.name,
        position: gym.geometry.location,
        icon: {
            path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
            fillColor: "#F39237",
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 0.075
        }
    });
    currentMarkers.push(marker);


    /** 
     * Upon clicking a marker this will request properties of the place object and call a function to display them
     * */
    google.maps.event.addListener(marker, 'click', () => {
        let request = {
            placeId: gym.place_id,
            fields: ['name', 'formatted_address', 'geometry', 'rating',
                'website', 'photos']
        };

        service.getDetails(request, (placeResult, status) => {
            displayDetails(placeResult, marker, status);
        });
    });
}

/**
 * Whenever a marker is clicked this function displays html box above the marker with the gym name
 * it also calls a function to display the full gym details in the sidebar
 */
function displayDetails(placeResult, marker, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
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

/**
 * This function checks if the gym location object has the values to be shown
 * If it doesnt have a value it calls a function to render the default, placeholder information
 * For all other fields it calls a function to render the specific information
 */
function showGymDetails(gym) {
    if (!gym.photos) {
        renderAltValue("photos");
    }
    if (!gym.rating) {
        renderAltValue("rating");
    }
    if (!gym.website) {
        renderAltValue("website");
    }
    for (const prop in gym) {
        if (gym.hasOwnProperty(prop)) {
            renderGymDetail(prop, gym[prop]);
        }
    }
}


/**
 * This function takes the gym location object and loops through each property that it is looking for, rendering a html element using the values as the html attributes
 */
function renderGymDetail(property, value) {
    if (gymDOM[property]) {
        let DOMTarget = gymDOM[property];
        /** If the property is photos it will loop through the photos until it finds one with a landscape orientation, if it cannot it will render the default image */
        if (property === "photos") {
            for (let i = 0; i < value.length; i++) {
                if (value[i].height < value[i].width) {
                    DOMTarget.alt = `Photo of location`;
                    DOMTarget.src = value[i].getUrl();
                    break;
                } else if (i === value.length) {
                    DOMTarget.alt = "Alternative image";
                    DOMTarget.src = "/assets/images/workout-plus.png";
                }
            }
        } else if (property === "website") {
            DOMTarget.innerHTML = value;
            DOMTarget.href = value;
            DOMTarget.classList.remove("website-unavailable");
            document.getElementById("website-alternative").classList.add("website-unavailable");
        } else {
            DOMTarget.textContent = value;
        }

    }
    /** This section changes to the CSS attribute of the element so that it will display on the webpage */
    gymDetails.css("display", "inline-block");
}

/**
 * This function handles the rendering of details if the gym is missing a value for a required property
 * It assigns premade default attributes to the HTML element
 */
function renderAltValue(property) {
    let DOMTarget = gymDOM[property];
    if (property === "photos") {
        DOMTarget.alt = "Alternative image";
        DOMTarget.src = "assets/images/workout-plus.png";
    } else if (property === "website") {
        DOMTarget.innerHTML = "No available website";
        DOMTarget.href = "";
        DOMTarget.classList.add("website-unavailable");
        document.getElementById("website-alternative").classList.remove("website-unavailable");
    } else if (property === "rating") {
        DOMTarget.textContent = "Not yet rated.";
    }
}


/** This function changes the CSS attribute of the gym details element to hide it if the HTML button is clicked */
function hideInformation() {
    gymDetails.css("display", "none");
}

/**
 * This function clears the list of current markers and calls a function to clear the markers appearing on the map
 */
function deleteMarkers() {
    setMapOnAll(null);
    currentMarkers = [];
}

/**
 * This function loops through the list of current markers and sets their location to null removing them from the map
 */
function setMapOnAll(map) {
    for (let i = 0; i < currentMarkers.length; i++) {
        currentMarkers[i].setMap(map);
    }
}

