// definimos las variables $

const $espesor = document.getElementById("espesor"),
    $largo = document.getElementById("largo"),
    $alto = document.getElementById("alto"),
    $calcular = document.getElementById("calcular"),
    $calculo = document.getElementById("calculo"),
    $ladrillo = document.getElementById("ladrillo"),
    $cemento = document.getElementById("cemento"),
    $arena = document.getElementById("arena");

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

// defino las variables como numero y valor

$calcular.addEventListener("click", () => {
    const espesor = Number($espesor.value);
    const largo = Number($largo.value);
    const alto = Number($alto.value);

// (isNan) si los numeros ingresados son negativos o por debajo de 0 alertara para agregar numeros validos o si ingresan texto

if (isNaN(espesor) || isNaN(largo) || isNaN(alto) || espesor <= 0 || largo <= 0 || alto <= 0){
    alert("agrega numeros validos");
    return;
}

// definimos variable para la seleccion de 30cm del espesor o 20cm

let datosMuro

// si el espesor es exactamente igual a 30 nos dara los datos del bloque de espesor de 30cm
// si no nos dara el bloque del espesor de los 20cm 
if (espesor === 30){
datosMuro = datos.muro.espesor30cm;

} else{
    datosMuro = datos.muro.espesor20cm;
}



const superficie = largo * alto;

// imprimimos los valores multiplicados por los datos de .json
// math.ceil redondea los numeros decimales a enteros hacia arriba

$calculo.textContent = superficie.toFixed(2) + " m²";
$ladrillo.textContent = Math.ceil(superficie * datosMuro.ladrillosPorM2);
$cemento.textContent = (superficie * datosMuro.cementoPorM2kg).toFixed(2);
$arena.textContent = (superficie * datosMuro.arenaPorM2).toFixed(3);







})




//redireccion al menu 



document.getElementById("btn-menu").addEventListener("click", () => {
    window.location.href = "menu.html"
})