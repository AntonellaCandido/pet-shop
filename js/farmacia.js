const searchContainer = document.getElementById("searchContainer")
let contenedorCartas = document.getElementById("contenedorFarmacia")
let carrito = JSON.parse(localStorage.getItem('carrito')) || []
let farmacia;

fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(response => response.json())
    .then((data) => {
        farmacia = data.filter((element) => element.categoria === "farmacia")
        renderCards(farmacia, contenedorCartas)
    })
    .catch(error => console.log(error))

function renderCards(datos, contenedor) {
    contenedor.innerHTML = ''
    let farmacia = ''
    datos.forEach(element => {
        let btnId = `btn-${element._id}`
        let esta = carrito.some(e => e._id === element._id)
        let textBtn
        if (esta) {
            textBtn = 'Eliminar Del Carrito'
        } else {
            textBtn = 'Agregar al Carrito'
        }
        if (element.disponibles !== 0) {
            farmacia +=
                `<div class="card1">
                <div class="card-img img-container"><img src="${element.imagen}" class="card-img-top" alt="...">
                <a href="../details.html?id=${element._id}">MAS DETALLES</a>
                </div>
                <div class="card-info">
                <p class="text-title"> ${element.producto} </p>
                </div>
                <div class="card-footer">
                <span class="text-title"> $ ${element.precio} </span>
                <div class="card-button">
                <button class='btn' id='${btnId}' onclick="handleclick('${element._id}')" >${textBtn}</button>   
                </div>
            </div>
        </div>`
        } else {
            farmacia +=

                `<div class="card1-Sn">
                <div class="card-img"><img src="${element.imagen}" class="card-img-top" alt="..."></div>

                <div class="card-info">
                <p class="text-title"> ${element.producto} </p>
                </div>
                <div class="card-footer">
                <span class="text-title"> $ ${element.precio} </span>
                <span class="text-title"> Sin Stock </span>
                </div>
            </div>`
        }

    });
    contenedor.innerHTML = farmacia
}

function handleclick(id) {
    let btn = document.getElementById(`btn-${id}`);
    let esta = carrito.some(element => element._id === id);
    if (esta) {
        carrito = carrito.filter(element => element._id !== id)
        btn.textContent = 'Agregar al Carrito';
    } else {
        let card = farmacia.find(element => element._id === id)
        carrito.push(card);
        btn.textContent = 'Eliminar Del Carrito';
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)
};

const search = document.getElementById("search");

function filtrarPorBusqueda(datos, buscardor) {
    return datos.filter(dato => dato.producto.toLowerCase().includes(buscardor.toLowerCase()))
}

searchContainer.addEventListener("input", () => {
    let filtrarBusqueda = filtrarPorBusqueda(farmacia, search.value)
    if (filtrarBusqueda.length <= 0) {
        contenedorCartas.innerHTML = `<h2 class="h2Busqueda">NO SE ENCONTRARON RESULTADOS</h2>`;
    } else {
        renderCards(filtrarBusqueda, contenedorCartas);
    }
});

