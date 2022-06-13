let cesta = []
let id



function itemAComprar() {

    let aComprar = prompt("Por favor introduzca un item a comprar entre p001, p002 o p003").toLowerCase()
    if (aComprar == "p001" || aComprar == "p002" || aComprar == "p003") {
        incluirCesta(aComprar)
        stockActual(aComprar)

    }
}

itemAComprar()

function incluirCesta(id) {
    item = productoStock.find(stock => stock.id === id)
    cesta.push(item.nombre)
    return console.log("el item comprado fue ", cesta[0])
}

function stockActual(id) {
    item = productoStock.find(stock => stock.id === id)
    item.stock -= 1
    return console.log("El stock actual de ", item.nombre, " es ", item.stock)
}

function masCompras() {
    let masElementos = confirm("Otro item?")
    if (masElementos == true) {
        itemAComprar()
    } else {
        alert("¡Adios!")
    }
}