let array = [
  {
    id: 1,
    nombre: "Didier",
  },
  {
    id: 2,
    nombre: "Andres",
  },
  {
    id: 3,
    nombre: "Lorena",
  },
];

let pares = [
  [1, { id: 1, nombre: "Didier" }],
  [2, { id: 2, nombre: "Andres" }],
  [3, { id: 3, nombre: "Lorena" }],
];

function Pares(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs;
}

let resultado = Pares(array);
console.log(resultado);
