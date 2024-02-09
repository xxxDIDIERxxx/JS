let user = {
  id: 1,
  nombre: "perro",
  edad: 5,
};
for (let prop in user) {
  console.log(prop,':',user[prop]);
}

let animales = ["perro", "gato", "conejo"];
for (let indice in animales) {
    console.log(indice,':',animales[indice]);
}
