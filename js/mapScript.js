/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/

let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bepaal de rechthoek rondom het gebouw van AP
// kleur de rechthoek in met de rode AP-kleur

let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// define rectangle geographical bounds
L.rectangle(bounds, {color: "#FF0000" , weight: 1}).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
// let popup = L.popup()
//     .setLatLng([51.23009, 4.41616])
//     .setContent("AP Hogeschool<br>Ellermanstraat 33")
//     .openOn(map);

let marker = L.marker([51.23009, 4.41616]).addTo(map);
marker.bindPopup("<strong>AP-Hogeschool</strong><br>Ellermanstraat 33").openPopup(); 

