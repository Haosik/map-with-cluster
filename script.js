function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {
            lat: 48.8712876,
            lng: 31.741716
        }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        var marker = new google.maps.Marker({
            position: location,
            // label: labels[i % labels.length],
            icon: 'monpasie2222.png'
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<div class="info-window__heading">' + locations[i].heading + '</div>' +
                '<div class="info-window__address">' + locations[i].address + '</div>' +
                '<div class="info-window__phone">' + locations[i].phone + '</div>',
            display: 'block',
            height: '200px',
            backgroundColor: 'black'

        });
        marker.addListener("click", function(e) {
            console.log(this);
            infowindow.open(map, marker);
        });
        return marker
    });


    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
var locations = [{
    lat: 50.454879,
    lng: 30.4762513,
    heading: 'Киев',
    address: 'Улица строителей, 11',
    phone: '+380666666666'
}, {
    lat: 50.460842,
    lng: 30.6283648,
    heading: 'Киев',
    address: 'Улица строителей, 11',
    phone: ''
}, {
    lat: 50.400514,
    lng: 30.5602574,
    heading: 'Киев',
    address: 'Улица строителей, 11',
    phone: '+380666666666'
}, {
    lat: 50.005723,
    lng: 36.2286418,
    heading: 'Харьков',
    address: 'Улица строителей, 11',
    phone: '+380666666666'
}, {
    lat: 49.946963,
    lng: 36.3972843,
    heading: 'Харьков',
    address: 'Улица строителей, 11',
    phone: '+380666666666'
}]
