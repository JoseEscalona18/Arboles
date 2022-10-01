let arbol = {}
let menu
let numero
let salir = 0

function insertar_num(nodo, numero){

    if (!nodo.valor){
        nodo.valor = numero
        nodo.der = {}
        nodo.izq = {}
    } else {
        if (nodo.valor > numero){
            insertar_num(nodo.izq, numero)
        } else{
            insertar_num(nodo.der, numero)
        }
    }
}

do {

    menu = Number(prompt("Seleccione la opcion: \n 1) Agregar numero \n 2) Ver arbol \n \n 0) salir"))

    switch(menu) {

        case 1:
            numero = prompt("Ingrese el numero a añadir: ")
            insertar_num(arbol, numero)
        break;

        case 2:
            console.log(arbol)
        break;

        case 0:
            salir = 1
        break;

    }


}while(salir == 0)