
    let buttom = document.getElementById("btn")

    buttom.addEventListener("click", (e)=>{
        e.preventDefault()
        Swal.fire({
            title: "Se envió tu consulta.Muchas gracias por escribirnos!",
            icon: "success",
            //confirmButtonText
        });
        //alert("formulario enviado,muchas gracias por escribirnos!")

    })