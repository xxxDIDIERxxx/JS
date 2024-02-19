function runList() {
    // Obtener el valor ingresado en el campo de texto
    var newCountry = document.getElementById('txtbox').value;

    // Obtener el elemento SELECT
    var selectElement = document.getElementById('list');

    // Crear un nuevo elemento OPTION
    var optionElement = document.createElement('option');

    // Establecer el valor del nuevo elemento OPTION como el país ingresado
    optionElement.textContent = newCountry;

    // Agregar el nuevo elemento OPTION al elemento SELECT
    selectElement.appendChild(optionElement);
}
