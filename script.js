let config = {
  minZoom: 14,
  maxZomm: 18
};

const zoom = 18

let lat = 54.15854218609446;
let lon = 19.395310847949904;



const map = L.map('map', config).setView([lat, lon], zoom);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// marker pojawiający się w miejscu, gdzie jest na początku wycentrowana mapa
L.marker([lat, lon]).addTo(map).bindPopup("Katedra Świętego Mikołaja");

//skala
L.control.scale().addTo(map);

//marker z etykietą w określonym miejscu
var markerWithPopup = L.marker([54.15887363097634, 19.393695826697293])
    .bindPopup("Najlepsze sushi w Elblągu")
    .addTo(map);

var markerWithPopup = L.marker([54.172381224575496, 19.397907688903178])
    .bindPopup("Dom")
    .addTo(map);

// łączenie punktów ze sobą
var routePoints = [
    [54.17198872827279, 19.396469748778205],
    [54.17077660400555, 19.39671650972584],
    [54.16955506887711, 19.39733874799088],
    [54.16837116332681, 19.397907463008917],
    [54.1662811378549, 19.399280946262845],
    [54.1646857167488, 19.398808667554302],
    [54.162901833197374, 19.39777836615559],
    [54.159248776646464, 19.398337681462856],
    [54.158933314539624, 19.395530888916113],
    [54.15887363097634, 19.393695826697293],
];

// tworzenie linii
var polyline = L.polyline(routePoints, { color: '#00008B' }).addTo(map);