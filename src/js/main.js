// import mapLoader from "./mapLoader";
// import {MarkerClusterer} from "@googlemaps/markerclusterer";
//
//
// const fetchFlats = async () => {
//     //remove data placeholder file from .gitignore folder
//     return await fetch('../data/apartments.txt')
//         .then(response => {
//             if (response.status === 200 && response.ok) {
//                 return response.json()
//             } else {
//                 return new Error(response.statusText)
//             }
//         })
// }
//
// const getMarkerPosition = (item) => {
//     const {lat, lng, ...other} = item;
//     return {
//         lat,
//         lng,
//         flatOptions: other,
//     }
// }
//
// const initMarker = (markers, map, infoWindow) => {
//
//     const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//
//     return markers.map((markerData, i) => {
//         const label = labels[i % markers.length];
//         const position = {
//             lat: Number(markerData.lat),
//             lng: Number(markerData.lng),
//         }
//         const marker = new google.maps.Marker({
//             position,
//             label,
//             map
//         })
//
//         marker.addListener("click", () => {
//             infoWindow.setContent(label);
//             infoWindow.open(map, marker);
//         });
//
//         return marker;
//
//     })
// }
//
//
// const initInfoWindow = () => {
//     return new google.maps.InfoWindow({
//         content: "",
//         disableAutoPan: true,
//     });
// }
//
// const iniMap = () => {
//     const mapWrapper = document.getElementById('map');
//     const mapArg = {
//         zoom: 12,
//         center: {lat: 49.594085, lng: 34.543770},
//     };
//
//     return new google.maps.Map(mapWrapper, mapArg)
//
// }
//
//
// async function init() {
//     try {
//         const flatsArr = await fetchFlats()
//         await mapLoader.load()
//         const markersData = flatsArr.map(getMarkerPosition)
//         const map = iniMap()
//         const infoWindow = initInfoWindow()
//         const markers = initMarker(markersData, map, infoWindow)
//         new MarkerClusterer({markers, map})
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// document.addEventListener('DOMContentLoaded', init)


import App from "./app";


document.addEventListener('DOMContentLoaded', async function () {
    const app = new App()
    try {
        await app.init()
        app.map.initMap()
    } catch (e) {
        console.log(e)
    }
})




