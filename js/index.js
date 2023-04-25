let map;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 4.569983, lng: -75.684261 },
    mapTypeId: "satellite",
    disableDefaultUI: true
  });

  // Define the LatLng coordinates for the polygon.
  const triangleCoords = [
    { lat: 4.569785, lng: -75.683658 },
    { lat: 4.569293, lng: -75.683755 },
    { lat: 4.568619, lng: -75.684334 },
    { lat: 4.569175, lng: -75.685621 },
    { lat: 4.570101, lng: -75.685227 },
  ];
  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  const lineCoords = [
    { lat: 4.570887, lng: -75.683749 },
    { lat: 4.569785, lng: -75.683658 },
    { lat: 4.570101, lng: -75.685227 },
    { lat: 4.570878, lng: -75.684918 },

  ];
  // Construct the polygon.
  const segment = new google.maps.Polygon({
    paths: lineCoords,
    strokeColor: "blue",
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "blue",
    fillOpacity: 0.35,
  });
  segment.setMap(map);
  bermudaTriangle.setMap(map);
  segment.addListener("click", showArrays2);
  infoWindow = new google.maps.InfoWindow();
  bermudaTriangle.addListener("click", showArrays);
  infoWindow = new google.maps.InfoWindow();
}
const infoDiv = document.createElement("div");
infoDiv.id = 'redbermuda'
document.body.appendChild(infoDiv);
const infoDiv2 = document.createElement("div");
infoDiv2.id = 'bluesegment'
document.body.appendChild(infoDiv2);

function showArrays(event) {
  const polygon = this;
  const vertices = polygon.getPath();
  let contentString =
    "<b>Bermuda Triangle polygon</b><br>" +
    "Clicked location: <br>" +
    event.latLng.lat() +
    "," +
    event.latLng.lng() +
    "<br>";

  for (let i = 0; i < vertices.getLength(); i++) {
    const xy = vertices.getAt(i);

    contentString +=
      "<br>" + "Coordinate " + i + ":<br>" + xy.lat() + "," + xy.lng();
  }

  // Update the content of the info div.
  infoDiv.innerHTML = contentString;
}
// You can add this code to your existing code and modify the initMap function to use the showArrays function as the event listener for the polygon's click event.

function showArrays2(event) {
  const polygon = this;
  const vertices = polygon.getPath();
  let contentString =
    "<b>Segment Triangle polygon</b><br>" +
    "Clicked location: <br>" +
    event.latLng.lat() +
    "," +
    event.latLng.lng() +
    "<br>";

  for (let i = 0; i < vertices.getLength(); i++) {
    const xy = vertices.getAt(i);

    contentString +=
      "<br>" + "Coordinate " + i + ":<br>" + xy.lat() + "," + xy.lng();
  }
  // Update the content of the info div.
  infoDiv2.innerHTML = contentString;
}
window.initMap = initMap;