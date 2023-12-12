/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let coffeeIcon = L.icon({
    iconUrl: './images/coffee-icon.png',
    shadowUrl: './images/coffee-icon-shadow.png',

    iconSize:     [60, 60], // size of the icon
    shadowSize:   [60, 60], // size of the shadow
    iconAnchor:   [51.23009, 4.41616], // point of the icon which will correspond to marker's location
    shadowAnchor: [51.23009, 4.41616],  // the same for the shadow
    popupAnchor:  [400, 500] // point from which the popup should open relative to the iconAnchor
});

let marker = L.marker([51.23009, 4.41616], {icon: coffeeIcon}).addTo(map);