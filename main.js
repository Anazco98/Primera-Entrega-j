


let pedido_1 = 'Si'
let pedido_2= 'No'

let nombre = prompt('Ingrese su Nombre y Apellido').toUpperCase()
alert('Hola' +' '+ nombre)
let edad = Number(prompt('Ingrese su Edad'))
while (isNaN(edad)){
    alert('Ingrese un Numero Porfavor')
    edad = Number(prompt('Ingrese su Edad'))
}

for (let i = 0; i <= 100; i++){


if (edad < 17){
    alert('No puede ingresar al Establecimiento')
    edad = Number(prompt('Ingrese su Edad'))

  }else if (edad >=18 ) {
    alert("Bienvenido al Establecimiento")

    break

  }
      
}
  comprar('Comidas')
  comprar ('Bebidas')
  comprar ('Postres')
 

  

 

function comprar (comidas, bebidas, postres){
    let pregunta = prompt('Quieres ver el menu de ' + ' ' + comidas )
    
    if (pregunta == pedido_1.toLowerCase()){

        console.log("En un momento se lo alcamzamos")
        
    } else if (pregunta == pedido_2.toLowerCase()){

        console.log("Muchas Gracias")
        
    }
    
}

