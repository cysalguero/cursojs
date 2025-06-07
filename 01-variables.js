// 1. Calcular área de un exagono

function calcularAreaHexagono(lado) {
    if (typeof lado !== "number"){
        console.log(`El tipo de dato no es valido`)
        return
    } 
    if (lado === 0){
        console.log(`Agrega un número diferente de cero`)
        return
    } 
    if (lado < 0){
        console.log(`El numero debe ser positivo`)
        return
    } 
    let area = (3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2;
    console.log(`El área del hexágono es: ${area}`);
}

calcularAreaHexagono(2);
calcularAreaHexagono(0);
calcularAreaHexagono(-10);
calcularAreaHexagono("si");

// 2. Calcular área de un ovalo
function calcularAreaOvalo(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Los tipos de datos no son validos");
        return;
    }
    if (a === 0 || b === 0) {
        console.log("Los numeros deben ser diferentes de cero");
        return;
    }
    if (a < 0 || b < 0) {
        console.log("Los numeros deben ser positivos");
        return;
    }
    if (a === b) {
        console.log("Los valores son iguales (no es un óvalo, es un círculo)");
        return;
    }
    let area = Math.PI * a * b;
    console.log(`El área del óvalo es: ${area}`);
}
calcularAreaOvalo(5, 3);
calcularAreaOvalo(0, 3);
calcularAreaOvalo(-5, 3);
calcularAreaOvalo(5, 5);

// 3. Funcion para saber si un número es par o impar
function par(numero) {
    if (typeof numero !== "number") {
        console.log(`El tipo de dato no es valido`);
        return;
    }
    if (numero === 0) {
        console.log(`El número es cero, no puede serlo`);
        return;
    }
    if (numero < 0) {
        console.log(`El número debe ser positivo`);
        return;
    }
    // Quiero hacer una if en la cual pueda saber si el numero es entero o no
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}

par(1322);
par(3);
par(0);
par(-10);
par("si");

// 4. Función para convertir grados Celsius a Fahrenheit y viceversa
function celsiusFahrenheit(celsius) {
    if (typeof celsius !== "number") {
        console.log(`El tipo de dato no es valido`);
        return;
    }
    if (celsius < -273.15) {
        console.log(`La temperatura no puede ser menor que -273.15°C (Según google)`);
        return;
    }    
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C son ${fahrenheit}°F`);
}   

celsiusFahrenheit(21);
celsiusFahrenheit(-300);
celsiusFahrenheit("si");

function fahrenheitCelsius(fahrenheit) {
    if (typeof fahrenheit !== "number") {
        console.log(`El tipo de dato no es valido`);
        return;
    }
    if (fahrenheit < -459.67) {
        console.log(`La temperatura no puede ser menor que -459.67°F (Según google)`);
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F son ${celsius}°C`);
}

fahrenheitCelsius(39);
fahrenheitCelsius(-500);
fahrenheitCelsius("nope");





// Que es git?
// Controlador de versiones
// Local
// Remoto 

// Que es github?
// Plataforma para subr repositorios

