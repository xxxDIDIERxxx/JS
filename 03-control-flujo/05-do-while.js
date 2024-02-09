// numeros pares

let i = 2;
// se evalua primero la condicion y si se cumple se ejecuta
while (i < 2) {
  if (i % 2 == 0) {
    console.log('#.',i);
  }
  i++;
}

// ejecuta el codigo y despues evalua la condicion
do {
    if (i % 2 == 0) {
        console.log('#.',i);
      }
      i++;
} while (i < 2); 
