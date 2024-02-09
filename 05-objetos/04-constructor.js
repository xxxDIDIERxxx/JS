function Usuario(params) {
  this.id = 1;
  this.recuperarClave = function () {
    //metaodos
    console.log("recuperando clave...");
  };
}

let usuario = new Usuario();
console.log(usuario);
