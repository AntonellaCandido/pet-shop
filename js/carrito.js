let contenedor=document.getElementById('carrito')
let carrito=JSON.parse(localStorage.getItem('carrito')) || []


function renderCards (datos,contenedor){
    contenedor.innerHTML=''
    let contenedorCarrito=''
    if(datos.length<=0){
        contenedorCarrito='<h1 class="h2Busqueda">No hay productos en el carrito</h1>'
    }
    datos.forEach(element => { 
      
        contenedorCarrito += 
        `<div class="card-carrito card mb-3 col-7">
        <div class="row g-0">
        
          <div class="col-md-4 p-2">
            <img src="${element.imagen}" class=" img-fluid rounded-3" alt="img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element.producto}</h5>
              <p class="card-text" id='pPrecio'>$${element.precio}</p>
              <div id='contenedor'>
                <input name='cantidad' class='input-class' type="number" value='' min='1' max='${element.disponibles}'id='inputCantidad'>
              </div>
              <p>${element.disponibles<5?`<span>Ultimos ${element.disponibles} unidades!</span>`:`Disponibles ${element.disponibles}`}</p>
              <button type="button" class="boton btn btn-secondary" id='${element._id}' onclick="handleclick('${element._id}')" ><img src="../img/close.png" alt="">Eliminar</button>
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

 

let algo = []
console.log(algo)

let contenedorInput = document.getElementById('contenedor') 
let cantidadCompra = document.querySelectorAll('#inputCantidad')
cantidadCompra.forEach(e=>{
  e.addEventListener('change',(e)=>{

    console.log(e.target.value)
    
    
    
  })
  
})




