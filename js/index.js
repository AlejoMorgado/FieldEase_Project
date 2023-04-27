let map;
let infoWindow;

// Initialize the map
const initMap = () => {
  // Set map options
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 4.569983, lng: -75.684261 },
    mapTypeId: "satellite",
    disableDefaultUI: true
  });

  const redPolygonCoords = [
    { lat: 4.569785, lng: -75.683658 },
    { lat: 4.569293, lng: -75.683755 },
    { lat: 4.568619, lng: -75.684334 },
    { lat: 4.569175, lng: -75.685621 },
    { lat: 4.570101, lng: -75.685227 },
  ];

  const bluePolygonCoords = [
    { lat: 4.570887, lng: -75.683749 },
    { lat: 4.569785, lng: -75.683658 },
    { lat: 4.570101, lng: -75.685227 },
    { lat: 4.570878, lng: -75.684918 },
  ];

  const redPolygon = new google.maps.Polygon({
    paths: redPolygonCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const bluePolygon = new google.maps.Polygon({
    paths: bluePolygonCoords,
    strokeColor: "blue",
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: "blue",
    fillOpacity: 0.35,
  });

  redPolygon.setMap(map);
  bluePolygon.setMap(map);

  redPolygon.addListener("click", showRedPolygonInfo,);
  bluePolygon.addListener("click", showBluePolygonInfo,);

  infoWindow = new google.maps.InfoWindow();

}

const redPolygonInfoDiv = document.createElement("div");
redPolygonInfoDiv.id = 'red-polygon-info';
graphicsContainer.appendChild(redPolygonInfoDiv);

const bluePolygonInfoDiv = document.createElement("div");
bluePolygonInfoDiv.id = 'blue-polygon-info';
graphicsContainer.appendChild(bluePolygonInfoDiv);
let paragraphRedPolygon = document.createElement("p");
const showRedPolygonInfo = () => {

  let contentString = "Sector 1 data";
  paragraphRedPolygon.textContent = contentString;
  redPolygonInfoDiv.appendChild(paragraphRedPolygon);
}
let paragraphBluePolygon = document.createElement("p");
const showBluePolygonInfo = () => {

  let contentString = "Sector 2 data";
  paragraphBluePolygon.textContent = contentString;
  bluePolygonInfoDiv.appendChild(paragraphBluePolygon)
}

window.initMap = initMap;