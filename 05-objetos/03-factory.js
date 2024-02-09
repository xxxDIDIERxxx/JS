function crearUsuario(email, nombre) {
  return {
    email,
    nombre,
    activo: true,
    recuperarClave: function () {
      console.log("recuperando clave...");
    },
  };
}

let user1 = crearUsuario("didier@gmail.com", "didier");
let user2 = crearUsuario("andres@gmail.com", "andres");

console.log(user1, user2);
