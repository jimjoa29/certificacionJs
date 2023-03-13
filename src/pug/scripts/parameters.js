// ::: Capturamos las parametros GET del URL :::
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

// ::: Guardamos la variable que viene desde PUG y la de JS :::
let label_id = urlParams.get('label'); // Variable contexto JS
let label_program = document.getElementById("labels_ids_es").value; // Variable contexto PUG


// ::: Valida que si viene nulo lo deje vacío, si no, le agrege una coma al inicio
if (label_id === null){
    label_id = '';
}

else {
    label_id = "," + label_id;
}

console.log(label_id)

// ::: Remplazamos los valores, una vez que el documento se haya ejecutado :::
document.getElementById("labels_ids_es").value = `${label_program}${label_id}`;

