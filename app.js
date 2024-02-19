function fibonacciSequence(input) {
    var sequence = [];

    // Caso base para el índice 0
    if (input >= 1) {
        sequence.push(0);
    }

    // Caso base para el índice 1
    if (input >= 2) {
        sequence.push(1);
    }

    // Generar los siguientes números de la secuencia Fibonacci
    for (var i = 2; i < input; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}
