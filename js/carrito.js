let contenedor=document.getElementById('carrito')
let carrito=JSON.parse(localStorage.getItem('carrito')) || []
function renderCards (datos,contenedor){
    contenedor.innerHTML=''
    let contenedorCarrito=''
    if(datos.length<=0){
        contenedorCarrito='<h1 class="h1-carrito">No hay productos en el carrito</h1>'
    }
    datos.forEach(element => { 
      
        let esta=carrito.some(e=>e._id===element._id)
        contenedorCarrito += 
        `<div class="card mb-3 col-7">
        <div class="row g-0">
        
          <div class="col-md-4">
            <img src="${element.imagen}" class="img-fluid rounded-start" alt="img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element.producto}</h5>
              <p class="card-text">$${element.precio}</p>
              <input type="number" value="1" min='1' max='${element.disponibles}'>
              <p>${element.disponibles<5?`<span>Ultimos ${element.disponibles} unidades!</span>`:`Disponibles ${element.disponibles}`}</p>
              <button class="boton" id='${element._id}' onclick="handleclick('${element._id}')" ><img src="../img/close.png" alt=""></button>
            </div>
          </div>
        </div>
      </div>
      `
});
    contenedor.innerHTML=contenedorCarrito
}
renderCards(carrito,contenedor)
function handleclick(id){
    console.log('first')
    let esta=carrito.some(element=>element._id===id);
    console.log(esta)
    if(esta){
        carrito=carrito.filter(element=>element._id!==id);
    }
    localStorage.setItem('carrito',JSON.stringify(carrito))
    renderCards(carrito,contenedor)
};

