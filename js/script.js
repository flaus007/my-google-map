
// //
// // const markerksForInitMap = () => {
// //     const arrayMarkers = [];
// //     const maps = map.fetchFlats();
// //     maps.then(item => {
// //         item.map(e => {
// //             const {lat, lng, ...other} = e;
// //             let obj = {
// //                 lat: lat,
// //                 lng: lng,
// //                 flatOptions: other,
// //             }
// //             arrayMarkers.push(obj);
// //         })
// //     })
// //     return arrayMarkers;
// // }
// //
// // const renderModalInfo = (flat) => {
// //     const div = document.querySelector('#map');
// //     const contentString = `
// //     <div class="modal">
// //         <div class="modal__box">
// //             <h2 class="modal__info">Детальна інформація</h2>
// //             <h3 class="modal__street">Вулиця - ${flat.flatOptions.street}</h3>
// //             <h3 class="modal__price">Ціна - ${flat.flatOptions.price}$</h3>
// //             <h3 class="modal__rooms">Кількість кімнат - ${flat.flatOptions.rooms}</h3>
// //             <h3 class="modal__status">Статус квартири - ${flat.flatOptions.status}</h3>
// //             <p class="modal__text">Ми маємо найкращі пропозиції для вас!</p>
// //             <button class="modal__btn-ok">Купити</button>
// //             <button class="modal__btn-close">Закрити</button
// //         </div>
// //     </div>
// //     `;
// //     div.innerHTML += contentString;
// //     return div;
// // }
// //
// // function initMap() {
// //
// //     const mapArg = {
// //         zoom: 12,
// //         center: {lat: 49.594085, lng: 34.543770},
// //     };
// //
// //     const mapContainer = document.getElementById('map');
// //
// //     const map = new google.maps.Map(mapContainer, mapArg);
// //
// //     const infoWindow = new google.maps.InfoWindow({
// //         content: "",
// //         disableAutoPan: true,
// //     });
// //     const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //
// //     map.markers = []
// //
// //     const markers = flats.map((elem, i) => {
// //
// //         return initMapMarkers(elem, map)
// //
// //     });
// //
// //     new markerClusterer.MarkerClusterer({map, markers});
// // }
// //
// // function initMapMarkers(markerData, map) {
// //     const position = {
// //         lat: Number(markerData.lat),
// //         lng: Number(markerData.lng),
// //     }
// //
// //     // Create marker instance.
// //     const marker = new google.maps.Marker({
// //         position,
// //         map
// //     });
// //
// //     return marker;
// // }
// //
// // function centerMap(map) {
// //
// //     // Create map boundaries from all map markers.
// //     var bounds = new google.maps.LatLngBounds();
// //     map.markers.forEach(function (marker) {
// //         bounds.extend({
// //             lat: marker.position.lat(),
// //             lng: marker.position.lng()
// //         });
// //     });
// //
// //     // Case: Single marker.
// //     if(map.markers.length == 1) {
// //         map.setCenter(bounds.getCenter());
// //
// //         // Case: Multiple markers.
// //     } else {
// //         map.fitBounds(bounds);
// //     }
// // }
// //
// //
// //
