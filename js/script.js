const map = {
    fetchFlats: async () => {
        //remove data placeholder file from .gitignore folder
        return await fetch('./data/apartments.txt')
            .then(response => {
                if (response.status === 200 && response.ok) {
                    return response.json()
                } else {
                    return new Error(response.statusText)
                }
            })
    },

    markerksForInitMap: () => {
        const arrayMarkers = [];
        const maps = map.fetchFlats();
        maps.then(item => {
            item.map(e => {
                const { lat, lng, ...other } = e;
                let obj = {
                    lat: lat,
                    lng: lng,
                    flatOptions: other,
                }
                arrayMarkers.push(obj);
            })
        })
        return arrayMarkers;
    },
}

const renderModalInfo = (flat) => {
    const div = document.querySelector('#map');
    const contentString = `
    <div class="modal">
        <div class="modal__box">
            <h2 class="modal__info">Детальна інформація</h2>
            <h3 class="modal__street">Вулиця - ${flat.flatOptions.street}</h3>
            <h3 class="modal__price">Ціна - ${flat.flatOptions.price}$</h3>
            <h3 class="modal__rooms">Кількість кімнат - ${flat.flatOptions.rooms}</h3>
            <h3 class="modal__status">Статус квартири - ${flat.flatOptions.status}</h3>
            <p class="modal__text">Ми маємо найкращі пропозиції для вас!</p>
            <button class="modal__btn-ok">Купити</button>
            <button class="modal__btn-close">Закрити</button
        </div>
    </div>
    `;
    div.innerHTML += contentString;
    return div;
}

const flats = map.markerksForInitMap();

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 49.594085, lng: 34.543770 },
    });
    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = flats.map((elem, i) => {
        let position = {
            lat: Number(elem.lat),
            lng: Number(elem.lng),
        }
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });

        //можеш не оголошувати параметр в колбекові, якщо ти його не використовуєш
        marker.addListener("mouseover", () => {
            infoWindow.setContent(elem.flatOptions.street);
            infoWindow.open(map, marker);
        });
        marker.addListener('mouseout', () => {
            infoWindow.close();
        })

        marker.addListener('click', () => {
            const window = document.querySelector('.window');
            const res = renderModalInfo;
            window.setContent(res(elem));
            window.open(map, marker);
        })

        return marker;
    });

    new markerClusterer.MarkerClusterer({ map, markers });
}
