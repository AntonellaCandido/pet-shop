let contenedor=document.getElementById('carrito')
let carrito=JSON.parse(localStorage.getItem('carrito'))
console.log(carrito)
function renderCards (datos,contenedor){
    contenedor.innerHTML=''
    let farmacia=''
    datos.forEach(element => { 
        let btnId=`btn-${element._id}`
        let esta=carrito.some(e=>e._id===element._id)
        console.log(esta)
        let textBtn
        if(esta){
            textBtn='Eliminar Del Carrito'
        }else{
            textBtn='Agregar al Carrito'
        }
        farmacia += 
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
              <button>X</button>
            </div>
          </div>
        </div>
      </div>
      `
});
    contenedor.innerHTML=farmacia
}
renderCards(carrito,contenedor)

function handleclick(id){
    let btn=document.getElementById(`btn-${id}`);
    let esta=carrito.some(element=>element._id===id);
    console.log(esta)
    if(esta){
        carrito=carrito.filter(element=>element._id!==id);
        btn.textContent='Agregar al Carrito';
    }else{
        let card=farmacia.find(element=>element._id===id);
        carrito.push(card);
        btn.textContent='Eliminar Del Carrito';
    }
    localStorage.setItem('carrito',JSON.stringify(carrito))
    console.log(carrito)
};
function borrar (){
    localStorage.removeItem('ca')
}