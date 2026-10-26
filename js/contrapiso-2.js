// defino las variables $

const $espesor = document.getElementById("espesor"),
    $ancho = document.getElementById("ancho"),
    $largo = document.getElementById("largo"),
    $volumen = document.getElementById("calculo"),
    $calcular = document.getElementById("calcular"),
    $cemento = document.getElementById("cemento"),
    $arena = document.getElementById("arena"),
    $piedra = document.getElementById("piedra");

// defino la variable datos para agregar el .json
    let datos;

    //fetch busca el archivo datos.json

fetch("datos.json")

    // .then then convierte el .json en objeto 
    // y el 2 .then guarda el objeto en datos
    .then(respuesta => respuesta.json())
    .then(contenido => {
        datos = contenido;
    });

// defino a las variables como numero y valor

$calcular.addEventListener ("click", () => {
    const espesor = Number($espesor.value);
    const ancho = Number($ancho.value);
    const largo = Number($largo.value);

// si agregan un valor debajo de 0 o 0 sera invalido y lo regresara con return y alertara que coloque numeros validos

if(isNaN(espesor) || isNaN(ancho) || isNaN(largo) || espesor <= 0 || ancho <= 0 || largo <= 0){
    alert("agrega numeros validos");
    return;
};

// calculo volumen

const volumen = largo * ancho * (espesor / 100)

// imprimo el mensaje que vendrian a ser los numeros en pantalla con sus 2 decimales

$volumen.textContent = volumen.toFixed(2) + " m³";
$cemento.textContent = (volumen * datos.contrapiso.cementoPorM3kg).toFixed(2);
$arena.textContent = (volumen * datos.contrapiso.arenaPorM3).toFixed(2);
$piedra.textContent = (volumen * datos.contrapiso.piedraPorM3).toFixed(2);


});




// redirecciona al menu.html


document.getElementById("btn-regreso").addEventListener("click", () => {
    window.location.href = "menu.html"
});