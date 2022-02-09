import FlatObject from "./flat-object";

export default class FlatStore {
    flats = []
    activeFlats = []
    
    async fetchFlats() {
        try {
            const response = await fetch('./data/apartments.txt')
            const json = (response.status === 200 && response.ok) ? await response.json() : new Error(response.statusText)
            this.flats = json.map(flat=>new FlatObject(flat))
            this.activeFlats.concat(this.flats)
        }catch (e) {
            console.error(e)
        }
    }
}
