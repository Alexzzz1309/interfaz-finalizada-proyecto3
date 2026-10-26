// definimos las variables
const $pared = document.getElementById("pared"),
    $pintura = document.getElementById("pintura"),
    $superficie = document.getElementById("superficie"),
    $calculo = document.getElementById("calculo"),
    $calcular = document.getElementById("calcular");

    // defino variable datos para agregar el .json

let datos;

    //fetch busca el archivo datos.json

fetch("datos.json")

    // .then convierte el .json en objeto 
    // y el 2 .then guarda el objeto en datos
    .then(respuesta => respuesta.json())
    .then(contenido => {
        datos = contenido;
    });

$calcular.addEventListener("click", () =>{
const superficie = Number($superficie.value);


if (isNaN(superficie) || superficie <= 0){
    alert("agrega un numero valido");
    return;
}


    // hacemos una constante de litros que divida la superficie por lo que rinde un litro de pintura

    const litros = superficie / datos.pintura.rindePorM2LitroPintura;

    $calculo.textContent = superficie.toFixed(2) + " m²";
    $pared.textContent = superficie.toFixed(2);
    $pintura.textContent = litros.toFixed(2);
});



document.getElementById("btn-regreso").addEventListener("click", () => {
    window.location.href = "menu.html"
})