const fetchFlats = async () => {
    return await fetch('./appartaments.txt')
        .then(response => {
            if (response.status === 200 && response.ok) {
                return response.json()
            } else {
                return new Error(response.statusText)
            }
        })
}
// функция фетча данных с сервера

const markerksForInitMap = () => {
    const arrayMarkers = [];
    const maps = fetchFlats();
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
}
// функция перезаписывания данных с фетча, в пустой новый массив

// Обьект двух массивов стандартного и пустой, который будет дальше заполняться
const flatsArrayObj = {
    flats: markerksForInitMap(),
    filterAFlats: [],
}

// создание новой структуры для вызывающевося окна
const renderModalInfo = (flat) => {
    const div = document.querySelector('.info-window');
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

// функция для создания маркеров
const initMarker = async (map) => {
    const markerFlats = flatsArrayObj.flats;
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const markers = markerFlats.map((elem, i) => {
        let position = {
            lat: Number(elem.lat),
            lng: Number(elem.lng),
        }
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });

        overAndOut(marker, elem);
        clickModal(marker, elem);
        return marker;
    });
    new markerClusterer.MarkerClusterer({ map, markers });
}

const createInfoWindow = (str = "") => {
    return infoWindow = new google.maps.InfoWindow({
        content: str,
        disableAutoPan: true,
    });
}

const overAndOut = (marker, elem) => {
    createInfoWindow();

    marker.addListener("mouseover", (e) => {
        infoWindow.setContent(elem.flatOptions.street);
        infoWindow.open(map, marker);
    });

    marker.addListener('mouseout', (e) => {
        infoWindow.close();
    })

    return marker;
}

const modalObject = {
    closeModal: () => {
        const btnClose = document.querySelector('.modal__btn-close');
        const modal = document.querySelector('.modal');
        const parent = document.querySelector('.info-window');
        return btnClose.addEventListener('click', () => {
            parent.removeChild(modal);
        })
    },

    renderModalInfo: (flat) => {
        const div = document.querySelector('.info-window');
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
    },

    clickBuy: () => {
        const btnBuy = document.querySelector('.modal__btn-ok');
        btnBuy.addEventListener('click', () => {
            alert('Поздравляем! Вы купили квартиру!');
        })
    }
}

const clickModal = (marker, elem) => {
    return marker.addListener('click', () => {
        modalObject.renderModalInfo(elem);
        modalObject.closeModal();
        modalObject.clickBuy();
    })
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 49.594085, lng: 34.543770 },
    });
    setTimeout(() => {
        initMarker(map);
    }, 200)
}

const addPostObj = {
    addBtn: document.querySelector('.btn-wrap'),
    render: () => {
        const divStr = `
        <div class="window">
            <div class="window-overlay">
                <h2 class="window__text">Введите данные для продажи квартиры:</h2>
                <input type="text" class="window__city">
                <input type="text" class="window__street">
                <input type="number" class="window__rooms">
                <input type="number" class="window__price">
                <input type="number" class="window__data">
                <input type="text" class="window__status">
                <button class="window__btn-sell">Выставить обьявление</button>
                <button class="window__btn-cancel">Отмена</button>
            </div>
        </div>
        `
        return addPostObj.addBtn.innerHTML += divStr;
    }
}