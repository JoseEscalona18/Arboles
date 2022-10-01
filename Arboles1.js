let arbol = {}
let menu
let numero = []
let contador = 0
let salir = 0


const t = new Tree()

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

    /* Expresion 2 * 3 + 8 + 4 * 8 / 1 */
    menu = Number(prompt("Seleccione la opcion: \n 1) Agregar la expresión \n 2) Ver arbol \n \n 0) salir"))

    switch(menu) {

        case 1:
            contador = numero.length
            do{
                
                numero[contador] = prompt("Ingrese el " + Number(contador+1) + "° numero o signo matematico (En orden): \n Escribe 'Listo' para salir")
               
                t.add(numero[contador])
                console.log(t)
                contador++

                if (numero[contador-1] == "listo"){
                    numero[contador-1] = "Listo"

                }

            }while(numero[contador-1] != 'Listo')

            numero.pop()

            /* numero = prompt("Ingrese la expresión matematica \n (Ejm: 5 + 10 - 8 * 1 / 6): ")
            numero = numero.split(/\s+/).join('').split('') */
            console.log(numero)

            for(let i = 0; i < numero.length;i++ ){
                insertar_num(arbol, numero[i])
            }
            
        break;

        case 2:
            console.log(arbol)
        break;

        case 0:
            salir = 1
        break;

    }


}while(salir == 0)