/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/* bepaal de rechthoek rondom het gebouw van AP */
//let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

/* kleur de rechthoek in met de rode AP-kleur */
//L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

/* plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33" */
//let marker = L.marker([51.23009, 4.41616]).addTo(map);
//marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();


let coffeeIcon = L.icon({
    iconUrl: '../images/coffee-icon.png',
    shadowUrl: '../images/coffee-icon-shadow.png',

    iconSize:     [60, 60], // size of the icon
    shadowSize:   [60, 60], // size of the shadow
    iconAnchor:   [0, 60], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 60],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.23009, 4.41616], {icon: coffeeIcon}).addTo(map);