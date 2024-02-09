// persomaje de Tv
let nombre = "goku";
let anime = "dragon ball z";
let especie = "sajayin";

//forma uno
/*let personaje = {
    nombre: nombre,
    anime: anime,
    especie: especie
}*/

//forma dos
let personaje = {
  nombre: "goku",
  anime: "dragon ball z",
  especie: "sajayin",
};

//mostrar objetos
console.log(personaje);
console.log(personaje.anime);
console.log(personaje["anime"]);

// cambiar valor del objeto
personaje.nombre = "vegeta";
personaje["nombre"] = "vegeta";

// eliminar un objeto
delete personaje.anime;

console.log(personaje);
