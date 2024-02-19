function update(value) {
    document.getElementById('screen').value += value;
}

function result() {
    let expression = document.getElementById('screen').value;
    let resultValue = eval(expression);
    document.getElementById('screen').value = resultValue;
}

function form_reset() {
    document.getElementById('screen').value = '';
}
