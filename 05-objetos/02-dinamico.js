const user = { id: 1 };

user.nombre = "didier";
user.guardar = function () {
  console.log("Guardando", user.nombre);
};

user.guardar();

delete user.nombre;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id: 1 });
const user1 = Object.seal({ id: 1 });
user1.nombre = "didier";
user1.id = 2;
console.log(user1);
