//console.log("hola mundo")

const x = 2 

let Persona = {
    nombre: "Ivan",
    edad: 28,
    actividades: ["Trabajar", "ver animes", "entrenar"]
}

//console.log('la persona se llama: ' + Persona.nombre)

// bucle for. PARA cuando se cuantas veces se va a repetir el bucle
// imprimir los numeros del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let autos = ['porcshe', 'toyota', 'kia', 'hyundai']
for (let auto of autos) {
    // console.log(auto}}
}
// bucle while. para cuando no sabemos cuantas veces se va a repetir el bucle
while (autos.length != 0) {
    autos.pop()
    console.log(autos)
}

// bucle do while. para cuando no sabemos cuantas veces se va a repetir, pero queremos que 
// se ejecute al menos una vez
do {
    //tu codigo
} while (autos.length != 0)

function sumar(a, b) {
    return a + b
}

console.log(sumar(2, 2))

function esperar() {
    console.log('Por favor, espere...')
}

esperar()