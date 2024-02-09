let pairs = [
  [1, { nombre: "Didier" }],
  [2, { nombre: "Andres" }],
  [3, { nombre: "Lorena" }],
];

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

function Coleccion(arr) {
  let coleccion = [];
  for (idx in arr) {
    let elemento = arr[idx];
    coleccion[idx] = elemento[1];
    coleccion[idx].id = elemento[0];
  }
  return coleccion;
}

let resultado = Coleccion(pairs);
console.log(resultado);
