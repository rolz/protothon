// get origin location   
function geoLoc(p) {
    var originLat = p.coords.latitude;
    var originLng = p.coords.longitude;

    // make sure its arguments and not a string
    originPosition = new google.maps.LatLng(originLat, originLng);
		console.log(originPosition);
}

function geoError() {
    console.log("Could not find you!");
    alert("Can't Find You!")
}

function get_location() {

    if (geoPosition.init()) {
        // 2nd callback
        geoPosition.getCurrentPosition(geoLoc, geoError);
    }
}

function get_location() {

    if (geoPosition.init()) {
        // 2nd callback
        geoPosition.getCurrentPosition(geoLoc, geoError);
    }
}

get_location();