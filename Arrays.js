// Arrow Function con Arrays de Frutas
const frutas = () => {
    return ["Banano", "Piña", "Fresa", "Uva", "Kiwi", "Mango", "Manzana", "Sandía", "Pera"];
}

// Arrow Function para Llenar Arrays de Números con Patrones
const fillArrayPattern = (size, pattern) => {
    if (isNaN(size) || size <= 0) {
        return "Error: El tamaño debe ser un número entero positivo.";
    }
    const array = Array.from({ length: size });
    array.fill(pattern);
    return array;
}

// Arrow Function con Array de Números Aleatorios
const randomNumbers = () => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}

// ------------------------- Arrays ---------------------------------
const frutasArray = frutas();
const patternArrayOne = fillArrayPattern(8, 1); 
const patternArrayTwo = fillArrayPattern(6, 'A');
const randomArray = randomNumbers();

// ---------------------- Implementación del Método .ForEach() ---------------------------------
console.log("Implementación del Método .ForEach()");

// Imprimir cada fruta con su longitud
frutasArray.forEach(fruta => console.log(`${fruta} - Longitud: ${fruta.length}`));

// Duplicar cada número aleatorio
const duplicatedRandomNumbers = [];
randomArray.forEach(number => duplicatedRandomNumbers.push(number * 2));
console.log("Números aleatorios duplicados:", duplicatedRandomNumbers);

// ----------------------- Implementación del Método .Reduce () --------------------------------
console.log("Implementación del Método .Reduce()");

// Sumar la longitud de todas las frutas
const totalLengthFrutas = frutasArray.reduce((accum, fruta) => accum + fruta.length, 0);
console.log("Total de longitud de todas las frutas:", totalLengthFrutas);

// Sumar todos los números aleatorios
const sumRandomNumbers = randomArray.reduce((accum, number) => accum + number, 0);
console.log("Suma de todos los números aleatorios:", sumRandomNumbers);

// --------------------------- Implementación del Método .Map() -----------------------------------
console.log("Implementación del Método .Map()");

// Convertir frutas a minúsculas
const lowercaseFrutas = frutasArray.map(fruta => fruta.toLowerCase());
console.log("Frutas en minúsculas:", lowercaseFrutas);

// Multiplicar cada número aleatorio por 3
const multipliedRandomNumbers = randomArray.map(number => number * 3);
console.log("Números aleatorios multiplicados por 3:", multipliedRandomNumbers);

// -------------------------- Implementación del Método .Filter() ---------------------------------
console.log("Implementación del Método .Filter()");

// Filtrar las frutas que contienen la letra 'a'
const frutasConA = frutasArray.filter(fruta => fruta.toLowerCase().includes('a'));
console.log("Frutas que contienen la letra 'a':", frutasConA);

// Filtrar números pares
const evenNumbers = randomArray.filter(number => number % 2 === 0);
console.log("Números pares:", evenNumbers);

// ------------------------------ Uso de Callback -----------------------------
const crearArregloStrings = (callback) => {
    let Frase = ["Hola", "soy", "Ana", "saludando", "desde", "JavaScript"];
    callback(Frase);
};

// Función de flecha para imprimir un arreglo
const imprimirArreglo = (arreglo) => {
    console.log(arreglo);
};

// Crear arreglo de strings y mostrarlo
crearArregloStrings(imprimirArreglo);

// Definimos un array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función de flecha que filtra los números pares
const filtrarPares = (arr, callback) => {
    const numerosPares = arr.filter((num) => num % 2 === 0);
    numerosPares.forEach(callback); // Ejecutamos el callback en cada número par
};