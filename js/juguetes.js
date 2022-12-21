
let contenedorCartas = document.getElementById("contenedorJuguetes")


    fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then( response => response.json())
    .then((data)=> {
        let juguetes = data.filter((element) => element.categoria === "jugueteria")
        console.log(juguetes)
        renderCards (juguetes,contenedorCartas)
    })
    .catch(error => console.log(error))


    function renderCards(data,contenedor){
        data.forEach(element => {
            if(element.disponibles === 0){
                contenedor.innerHTML += `
                    <div class="card m-3" style="width: 18rem;">
                        <img src="${element.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${element.producto} </h5>
                            <p class="card-text"> Sin stock </p>
                            <p class="card-text"> $ ${element.precio} </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`
            }else if(element.disponibles <= 5){
                contenedor.innerHTML += `
                <div class="card m-3" style="width: 18rem;">
                    <img src="${element.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${element.producto} </h5>
                        <p class="card-text"> últimas ${element.disponibles} unidades!</p>
                        <p class="card-text"> $ ${element.precio} </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
            }else{
                contenedor.innerHTML += `
                    <div class="card m-3" style="width: 18rem;">
                        <img src="${element.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"> ${element.producto} </h5>
                            <p class="card-text"> $ ${element.precio} </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            `
            }
        });
    }