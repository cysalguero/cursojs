// 1. Calcular área de un exagono

function calcularAreaHexagono(lado) {
    if (typeof lado !== "number"){
        console.log(`El tipo de dato no es valido`)
    } else if (lado === 0){
        console.log(`Agrega un número diferente a "0"`)
    } else if (lado < 0){
        console.log(`El numero debe ser positivo`)
    } else {
    let area = (3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2;
    console.log(`El área del hexágono es: ${area}`);
    }
}

calcularAreaHexagono(2);
calcularAreaHexagono(0);
calcularAreaHexagono(-10);
calcularAreaHexagono("si");

// 2. Calcular área de un ovalo
function calcularAreaOvalo(a, b) {
    let area = Math.PI * a * b;
    console.log(`El área del óvalo es: ${area}`);
}
calcularAreaOvalo(5, 3);
calcularAreaOvalo(10, 4);
calcularAreaOvalo(7, 2);

// 3. Funcion para saber si un número es par o impar
function par(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par :)`);
    } else {
        console.log(`${numero} es impar :)`);
    }
}

par(1322);
par(1521213);
par(2231);

// 4. Función para convertir grados Celsius a Fahrenheit y viceversa
function celsiusFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C son ${fahrenheit}°F`);
}   

celsiusFahrenheit(21);
celsiusFahrenheit(10);
celsiusFahrenheit(34);

function fahrenheitCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F son ${celsius}°C`);
}

fahrenheitCelsius(39);
fahrenheitCelsius(222);
fahrenheitCelsius(194);





// Que es git?
// Controlador de versiones
// Local
// Remoto 

// Que es github?
// Plataforma para subr repositorios

