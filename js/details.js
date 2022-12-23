fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const queryStrign = location.search
        const params = new URLSearchParams(queryStrign);
        const id = params.get("id");
        const idDetail = data.find(carDetail => carDetail._id == id);
        const detailContenedor = document.getElementById("divDetails");

        detailContenedor.innerHTML =
            `<img class="m-3 rounded" src="${idDetail.imagen}" width="300" alt="">
            <div class="aboutText d-flex flex-column align-items-start container">
                <h2 class="h2Details text-center pt-3 text-white">${idDetail.producto}</h2>
                <h3>${idDetail.categoria}</h3>
                <p class="parrafoDetail text-start">${idDetail.descripcion}</p>
                <h3 class="h3Details">Precio: $${idDetail.precio}</h3>
            </div>
</section>`
    })
    .catch(err => console.log(err))