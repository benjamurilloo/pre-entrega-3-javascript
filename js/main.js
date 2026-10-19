// Simulador de Cuotas - Pre-Entrega 3

// ===== FUNCIONES =====

// Función flecha: devuelve true si la cantidad de cuotas es un plan válido
const esCuotaValida = (cuotas) => cuotas === 1 || cuotas === 3 || cuotas === 6 || cuotas === 12

// Función flecha: calcula el valor de cada cuota (sin interés, como en la Pre-Entrega 1)
const calcularCuota = (precio, cuotas) => precio / cuotas

// Función declarada (entrada): pide el precio hasta que sea válido y lo retorna
function pedirPrecio(mensaje) {
    let precio
    // do...while: pide el precio hasta que sea un número mayor a 0
    do {
        precio = parseFloat(prompt(mensaje))
        if (isNaN(precio) || precio <= 0) {
            alert("❌ Precio inválido. Ingresá un número mayor a 0")
        }
    } while (isNaN(precio) || precio <= 0)
    return precio
}

// Función expresada (entrada): pide las cuotas hasta que sea un plan válido y las retorna
const pedirCuotas = function (mensaje) {
    let cuotas
    // do...while: usa esCuotaValida para repetir la pregunta
    do {
        cuotas = parseInt(prompt(mensaje))
        if (!esCuotaValida(cuotas)) {
            alert("❌ Número de cuotas inválido. Elegí 1, 3, 6 o 12")
        }
    } while (!esCuotaValida(cuotas))
    return cuotas
}

// Función declarada (salida): muestra el detalle en consola y el resumen en un alert
function mostrarResultado(nombre, precio, cuotas, valorCuota) {
    // for: una línea en consola por cada cuota
    console.log(`--- Detalle de pagos de ${nombre} ---`)
    for (let i = 1; i <= cuotas; i++) {
        console.log(`Cuota ${i} de ${cuotas}: $${valorCuota.toFixed(2)}`)
    }

    // if: singular o plural según la cantidad de cuotas
    let palabraCuota = "cuotas"
    if (cuotas === 1) {
        palabraCuota = "cuota"
    }

    alert(
        `Resumen:\n` +
        `Precio: $${precio.toFixed(2)}\n` +
        `${cuotas} ${palabraCuota} de $${valorCuota.toFixed(2)}\n\n` +
        "(Mirá la consola para ver el detalle de cada cuota)"
    )
}

// Función declarada: junta entrada, procesamiento y salida de una simulación
function simularCompra(nombre) {
    const precio = pedirPrecio("Ingresá el precio del producto")
    const cuotas = pedirCuotas("Ingresá la cantidad de cuotas (1, 3, 6 o 12)")
    const valorCuota = calcularCuota(precio, cuotas)
    mostrarResultado(nombre, precio, cuotas, valorCuota)
}

// Función declarada (salida): muestra los planes disponibles
function mostrarPlanes(nombre) {
    alert(
        `${nombre}, estos son los planes disponibles (todos sin interés):\n` +
        "1 cuota\n" +
        "3 cuotas\n" +
        "6 cuotas\n" +
        "12 cuotas"
    )
}

// ===== PROGRAMA PRINCIPAL =====

alert("Bienvenido al Simulador de Cuotas")

const nombre = prompt("Ingresá tu nombre")

let opcion = ""

// while: el menú se repite hasta que el usuario elija salir
while (opcion !== "3") {
    opcion = prompt(
        `Hola ${nombre}, elegí una opción:\n` +
        "[1] - Simular una compra en cuotas\n" +
        "[2] - Ver planes disponibles\n" +
        "[3] - Salir"
    )

    switch (opcion) {
        case "1":
            simularCompra(nombre)
            break

        case "2":
            mostrarPlanes(nombre)
            break

        case "3":
            alert(`¡Gracias por usar el simulador, ${nombre}!`)
            break

        default:
            alert("❌ Opción inválida. Elegí 1, 2 o 3")
    }
}
