// defino valores con constante:

const $largo = document.getElementById("largo"),
    $calcular = document.getElementById("calcular"),
    $calculo = document.getElementById("calculo"),
    $cemento = document.getElementById("cemento"),
    $arena = document.getElementById("arena"),
    $piedra = document.getElementById("piedra"),
    $hierro10 = document.getElementById("hierro10"),
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

// escucho un evento y apenas den click
// generara otros valores de constante de texto a numero

$calcular.addEventListener("click", () => {
const largo = Number($largo.value)

// (isNan) si no es numero entonces agrega numeros validos y (return) regresa
    if(isNaN(largo) || largo <= 0 ){
        alert("agrega numeros validos");
    return;
    }

    
// de las variables $cemento, etc (toFixed) generara 2 decimales y multiplicado segun los datos dados del .json

$calculo.textContent = largo.toFixed(2) + " m";
$cemento.textContent = (largo * datos.columna.cementoPorMetroLineal).toFixed(2);
$arena.textContent = (largo * datos.columna.arenaPorMetroLinealM3).toFixed(3);
$piedra.textContent = (largo * datos.columna.piedraPorMetroLinealM3).toFixed(3);
$hierro10.textContent = (largo * datos.columna.hierro10PorMetroLineal).toFixed(2);
$hierro4.textContent = (largo * datos.columna.hierro4PorMetroLineal).toFixed(2);

});

// redireccionara a menu.html

document.getElementById("btn-regreso").addEventListener("click", () => {
    window.location.href = "menu.html"
});