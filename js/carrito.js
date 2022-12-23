let contenedor=document.getElementById('carrito')
let carrito=JSON.parse(localStorage.getItem('carrito')) || []

let btnClear=document.querySelector('.clear-carrito')
function renderCards (datos,contenedor){
    contenedor.innerHTML=''
    let contenedorCarrito=''
    if(datos.length<=0){
        contenedorCarrito='<h1 class="h2Busqueda">No hay productos en el carrito</h1>'
    }
    datos.forEach(element => { 
        let inputId = `input-${element._id}`
        let input=`input-number${element._id}`
        let esta=carrito.some(e=>e._id===element._id)
        contenedorCarrito += 
        `<div class="card-carrito card mb-3 col-7">
        <div class="row g-0">
        
          <div class="col-md-4 p-2">
            <img src="${element.imagen}" class=" img-fluid rounded-3" alt="img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${element.producto}</h5>
              <div class="d-flex">
                <p>$</p>
                <p id="${inputId}"class="card-text">${element.precio}</p>
              </div>
              <input onclick="inputCant('${element._id}')" class='input-class ${input} ' type="number" value="" min='1' max='${element.disponibles}'>
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
function inputCant(id){
  let text = document.getElementById(`input-${id}`);
  let precio=parseInt(text.textContent)
  let event=document.querySelector(`.input-number${id}`)
  let input
  event.addEventListener('change',(e)=>{
    console.log(e.target.value)
    let value=parseInt(e.target.value)
     text.textContent=`${(precio*parseInt(e.target.value))/(value-1)}`
  })
}
function handleclick(id){
    let esta=carrito.some(element=>element._id===id);
    if(esta){
        carrito=carrito.filter(element=>element._id!==id);
    }
    localStorage.setItem('carrito',JSON.stringify(carrito))
    renderCards(carrito,contenedor)
};
btnClear.addEventListener('click',(e)=>{
  localStorage.clear()
  carrito=[]
  renderCards(carrito,contenedor)
  e.preventDefault()
      Swal.fire({
          title: "Compra Finalizada",
          icon: "success",
      });
})

