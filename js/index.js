let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 4.570635, lng: -75.683631},
    zoom: 18,
  });
}

window.initMap = initMap;

document.getElementById("my-button").addEventListener("click", ()=> {
  document.getElementById("topContainer").style.visibility = "visible"
})