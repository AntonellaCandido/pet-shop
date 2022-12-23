
let carrito = JSON.parse(localStorage.getItem('carrito')) || []
let idDetail
fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const queryStrign = location.search
        const params = new URLSearchParams(queryStrign);
        const id = params.get("id");
        idDetail = data.find(carDetail => carDetail._id == id);
        const detailContenedor = document.getElementById("divDetails");
        let btnId = `btn-${idDetail._id}`
        let esta = carrito.some(e => e._id === idDetail._id)
        let textBtn
        if (esta) {
            textBtn = 'Eliminar Del Carrito'
        } else {
            textBtn = 'Agregar al Carrito'
        }
        detailContenedor.innerHTML =
            `<img class="m-3 rounded" src="${idDetail.imagen}" width="300" alt="">
            <div class="aboutText d-flex flex-column align-items-start container">
                <h2 class="h2Details text-center pt-3 text-white">${idDetail.producto}</h2>
                <h3>${idDetail.categoria}</h3>
                <p class="parrafoDetail text-start">${idDetail.descripcion}</p>
                <div class='d-flex justify-content-evenly w-100 align-items-center'>
                
                <h3 class="h3Details">Precio: $${idDetail.precio}</h3>
                <button class='botonDetail' id='${btnId}' onclick="handleclick('${idDetail._id}')" >${textBtn}</button>   
                </div>
                
            </div>
</section>`
    })
    .catch(err => console.log(err))

    function handleclick(id) {
        let btn = document.getElementById(`btn-${id}`);
        let esta = carrito.some(element => element._id === id);
        if (esta) {
            carrito = carrito.filter(element => element._id !== id)
            btn.textContent = 'Agregar al Carrito';
        } else {
            
            carrito.push(idDetail);
            btn.textContent = 'Eliminar Del Carrito';
        }
    
        localStorage.setItem('carrito', JSON.stringify(carrito))
        console.log(carrito)
    };