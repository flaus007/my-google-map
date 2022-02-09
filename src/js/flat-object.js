export default class FlatObject {
    city
    street
    lat
    lng
    rooms
    date
    price
    status
    zoom
    position
    constructor(jsonData) {
        this.fillData(jsonData)
    }
    
    fillData(data){
        if(data.city)this.city = data.city
        if(data.street)this.street = data.street
        if(data.lat)this.lat = data.lat
        if(data.lng)this.lng = data.lng
        if(data.rooms)this.rooms = data.rooms
        if(data.date)this.date = data.date
        if(data.price)this.price = data.price
        if(data.status)this.status = data.status
        if(data.zoom)this.zoom = data.zoom
        if(data.position)this.position = data.position
    }
    
    getFlatPosition(){
        return {
            lat:Number(this.lat),
            lng:Number(this.lng),
        }
    }
}
