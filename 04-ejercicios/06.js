let array = [2, 5, 7, 15, -5, -100, 55];

function cuantoPositivos(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      contador++;
    }
  }
  return contador;
}

let numeros = cuantoPositivos(array);
console.log("cantidad positivos:", numeros);
