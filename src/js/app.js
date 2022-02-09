import FlatStore from "./flat-store";
import AppMap from "./app-map";

export default class App {
    flatStore
    map
    
    constructor() {
        this.flatStore = new FlatStore()
        this.map = new AppMap(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 49.594085, lng: 34.543770},
        })
    }
    
    async init() {
        try {
        await this.flatStore.fetchFlats()
        await this.map.mapLoader()
            this.connectStoreAndMap()
        }catch (e) {
            console.log(e)
        }
    }
    
    connectStoreAndMap(){
        const labels = this.map._labels
        const activeFlats = this.flatStore.flats
        
        if (activeFlats && activeFlats.length > 0){
            activeFlats.forEach((flat, i)=>{
                const position = flat.getFlatPosition()
                const label = labels[i % activeFlats.length]
                this.map.addMarker(position, label)
            })
        }
        this.map.createCluster()
    }
}
