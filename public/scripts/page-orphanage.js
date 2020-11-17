const options={
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

const map = L.map('mapid', options).setView([-27.2222598,-49.6475132], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


const icon =L.icon({

iconUrl:"/images/map-marker.svg",
iconSize: [58, 68],
iconAnchor: [29,68],
popupAnchor: [170, 2]

})


L
.marker([-27.2222598,-49.6475132], {icon})
.addTo(map)


function selectImage(event){
    const button = event.currentTarget
    const buttons = document.querySelectorAll(".images buttons")
    buttons.forEach((button) => {    
    
            button.classList.remove("active")
        })
        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")

        imageContainer.src = image.src

   
button.classList.add("active")
}
