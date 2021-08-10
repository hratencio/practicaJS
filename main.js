function Ncantidad(n){
    for(let i = 0; i <= n; i++){
        console.log(i)
    }
}

//Ncantidad(20);
let etiquetas = [];
function repetir(n, accion) {
    for (let i = 0; i < n; i++) {
      accion(i);
    }
}
  
repetir(3, i =>{etiquetas.push(`Numero ${i + 1}`)});
console.log(etiquetas);