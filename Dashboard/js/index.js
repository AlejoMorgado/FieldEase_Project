let map;
let infoWindow;
let polygonClicked = false;

const showStaticGrahp = () => {
  document.getElementById("staticGrahp").style.display = "block";
  document.getElementById("showStaticGraphBtn").style.display = "none";
  document.getElementById("blueZone").style.display = "none";
  document.getElementById("redZone").style.display = "none";
};

const showRedPolygonInfo = () => {
  polygonClicked = true;
  document.getElementById("redZone").style.display = "block";
  document.getElementById("showStaticGraphBtn").style.display = "block";
  document.getElementById("blueZone").style.display = "none";
  document.getElementById("staticGrahp").style.display = "none";
};

const showBluePolygonInfo = () => {
  polygonClicked = true;
  document.getElementById("blueZone").style.display = "block";
  document.getElementById("showStaticGraphBtn").style.display = "block";
  document.getElementById("redZone").style.display = "none";
  document.getElementById("staticGrahp").style.display = "none";
};

const initMap = () => {
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
    strokeColor: "#FFACAC",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#FFACAC",
    fillOpacity: 0.35,
  });

redPolygon.addListener('mouseover', function(event) {
  redPolygon.setOptions({
    strokeWeight: 6,
    fillOpacity: 0.5
  });
});

redPolygon.addListener('mouseout', function(event) {
  redPolygon.setOptions({
    strokeWeight: 3,
    fillOpacity: 0.35
  });
});

  const bluePolygon = new google.maps.Polygon({
    paths: bluePolygonCoords,
    strokeColor: "#B9E9FC", 
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#3A98B9",
    fillOpacity: 0.35,
  });

bluePolygon.addListener('mouseover', function(event) {
  bluePolygon.setOptions({
    strokeWeight: 6,
    fillOpacity: 0.5
  });
});

bluePolygon.addListener('mouseout', function(event) {
  bluePolygon.setOptions({
    strokeWeight: 3,
    fillOpacity: 0.35
  });
});
  redPolygon.setMap(map);
  bluePolygon.setMap(map);

  window.addEventListener("load", () => {
    document.getElementById("staticGrahp").style.display = "block";
    document.getElementById("showStaticGraphBtn").style.display = "none";
    document.getElementById("blueZone").style.display = "none";
    document.getElementById("redZone").style.display = "none";
  });

  map.addListener("click", () => {
    if (!polygonClicked) {
      document.getElementById("staticGrahp").style.display = "block";
      document.getElementById("blueZone").style.display = "none";
      document.getElementById("redZone").style.display = "none";
    }
  });
  redPolygon.addListener("click", showRedPolygonInfo);
  bluePolygon.addListener("click", showBluePolygonInfo);
  document.getElementById("showStaticGraphBtn").addEventListener("click", showStaticGrahp);

  infoWindow = new google.maps.InfoWindow();
};

window.initMap = initMap;
