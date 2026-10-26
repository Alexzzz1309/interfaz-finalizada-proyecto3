// defino las variables $
const $espesor = document.getElementById("espesor"),
    $ancho = document.getElementById("ancho"),
    $largo = document.getElementById("largo"),
    $calculo = document.getElementById("calculo"),
    $calcular = document.getElementById("calcular"),
    $cemento = document.getElementById("cemento"),
    $arena = document.getElementById("arena"),
    $piedra = document.getElementById("piedra"),
    $hierro8 = document.getElementById("hierro8"),
    $hierro6 = document.getElementById("hierro6");



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


// escuchamos un evento que apenas de click 
// definira el valor de espesor , ancho y largo 

$calcular.addEventListener("click", () => {
const espesor = Number($espesor.value);
const ancho = Number($ancho.value);
const largo = Number($largo.value);

// (isNaN) si no es un numero , es un valor negativo o debajo de 0 alertara  que agregue numeros validos

if (isNaN(espesor) || isNaN(ancho) || isNaN(largo) || espesor <= 0 || ancho <= 0 || largo <= 0){
    alert("agrega numeros validos");
    return;
}

// calculamos el total 

const superficie = largo * ancho 


// aqui se imprime el valor multiplicado por los datos que tiene el .json

$calculo.textContent = superficie.toFixed(2) + " m²";
$cemento.textContent = (superficie * datos.losa.cementoPorM2kg).toFixed(2);
$arena.textContent = (superficie * datos.losa.arenaPorM2).toFixed(3)
$piedra.textContent = (superficie * datos.losa.piedraPorM2).toFixed(3);
$hierro8.textContent = (superficie * datos.losa.hierro8PorM2).toFixed(2);
$hierro6.textContent = (superficie * datos.losa.hierro6PorM2).toFixed(2);

});

// redirecciona directamente al menu.html 

document.getElementById("btn-regreso").addEventListener("click", () => {
    window.location.href = "menu.html"
});