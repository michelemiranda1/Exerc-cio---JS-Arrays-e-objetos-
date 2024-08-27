
// Arrays 

// nome no final
const places = ["Brazil", "Japan", "England"];

places.push("Australia");
console.log(places);

// remover primeiro nome
places.shift();
console.log(places);

// exibir o tamanho do array
let length = places.length
console.log(places.length);

// converter maiusculas 
const newPlaces = [];
for (let c = 0; c < places.length; c++) {
    let capitalizeArray = places[c].toUpperCase();
    newPlaces.push(capitalizeArray);
};
console.log(newPlaces);

// Objetos 

let carros = {
    marca: 'Toyota',
    modelo: 'Modelo A',
    ano: 2022, 
};

// 1. Adicionar propriedade cor
carros.cor = "Branco"
console.log(carros.cor);

// 2. Remova a propriedade ano
delete carros.ano;
console.log(carros.ano); 

// 3. a marca e modelo 
console.log(carros.marca);
console.log(carros.modelo);

