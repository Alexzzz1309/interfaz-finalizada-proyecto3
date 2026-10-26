//definimos la variables

const $largo = document.getElementById("largo"), 
    $calcular = document.getElementById("calcular"),
    $volumen = document.getElementById("calculo"),
    $cemento = document.getElementById("cemento"),
    $arena = document.getElementById("arena"),
    $piedra = document.getElementById("piedra"),
    $hierro8 = document.getElementById("hierro8"),
    $hierro4 = document.getElementById("hierro4");

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

$calcular.addEventListener("click", () => {
const largo = Number($largo.value);

if (isNaN(largo) || largo <= 0){
    alert("agrega un numero valido");
    return;
}



$volumen.textContent = largo.toFixed(2) + " m³";
$cemento.textContent = (largo * datos.viga.cementoPorMetroLineal).toFixed(2);
$arena.textContent = (largo * datos.viga.arenaPorMetroLinealM3).toFixed(2);
$piedra.textContent = (largo * datos.viga.piedraPorMetroLinealM3).toFixed(3);
$hierro8.textContent = (largo * datos.viga.hierro8PorMetroLineal).toFixed(2);
$hierro4.textContent = (largo * datos.viga.hierro4PorMetroLineal).toFixed(2);



});





document.getElementById("btn-regreso").addEventListener("click", () => {
    window.location.href = "menu.html"
});