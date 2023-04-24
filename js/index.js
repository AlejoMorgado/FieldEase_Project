let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 4.5504627, lng: -75.6564232},
    zoom: 12,
  });
}

window.initMap = initMap;