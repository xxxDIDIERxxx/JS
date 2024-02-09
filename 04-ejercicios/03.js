function obtenerIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'elemento no existe';
    }

    return arr[idx];
}
let resultado = obtenerIdx([1, 2], 1)
console.log(resultado);