import {Loader} from "@googlemaps/js-api-loader"
import {MarkerClusterer} from "@googlemaps/markerclusterer";

export default class AppMap {
    _map
    _mapLoader
    _mapWrapper
    _mapArgs
    _infoWindow
    _labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    _markers = []
    
    constructor(mapWrapper, mapArgs) {
        this._mapWrapper = mapWrapper;
        this._mapArgs = mapArgs
    }
    
    async mapLoader() {
        return new Loader({
            apiKey: 'AIzaSyAvkiEyeEnaYkKNo4-7Z7INOKLEbaG-Brg',
            version: 'weekly',
        }).load().then(()=>{
            this.initMap()
        })
    }
    
    initMap() {
        this._map = new google.maps.Map(this._mapWrapper, this._mapArgs)
        this._infoWindow = new google.maps.InfoWindow({
            content: "",
            disableAutoPan: true,
        })
    }
    
    addMarker(position, label) {
        const marker = new google.maps.Marker({
            position,
            label,
            map: this._map
        })
    
        
        marker.addListener("click", () => {
            this._infoWindow.setContent(label);
            this._infoWindow.open(this._map, marker);
        });
        
        this._markers.push(marker)
    }
    
    createCluster(){
        new MarkerClusterer({
            markers: this._markers,
            map: this._map
        })
    }
}
