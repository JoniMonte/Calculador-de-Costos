
let calculadorVacaciones = document.getElementById("calculadorVacaciones");
calculadorVacaciones.addEventListener("submit",calcularGastos);

function obtenerValores() {
    let destino = document.getElementById("destino").value;
    let dineroDisponible = document.getElementById("dineroDisponible").value;
    let hospedaje = document.getElementById("hospedaje").value;
    let transporte = document.getElementById("transporte").value;
    let comida = document.getElementById("comida").value;

    return { destino, dineroDisponible, hospedaje, transporte, comida };
}

function calcularGastos(e) {
    e.preventDefault();

    const { destino, dineroDisponible, hospedaje, transporte, comida } = obtenerValores();


    let gastosTotal = parseInt(hospedaje) + parseInt(transporte) + parseInt(comida);
    let balance = dineroDisponible - gastosTotal;

    console.log(destino, dineroDisponible, balance);
    interactuarHtml (destino, dineroDisponible, balance);
}

function interactuarHtml (destino, dineroDisponible, balance) {
    let resultado = document.getElementById("resultado");
    let datos = document.createElement("div")
    datos.innerHTML =`
    <div class= "container-datos row">
        <div class= "col s4">
            <h6>${destino}</h6>
        </div>

    <div class= "col s4">
        <h6>${dineroDisponible}</h6>
    </div>

    <div class= "col s4">
        <h6>${balance}</h6>
    </div>`
    resultado.appendChild(datos);

    reinicioPagina();
}

function reinicioPagina() {
    document.getElementById("calculadorVacaciones").reset()
}

//tratando de usar localStorage

function guardarStorage() {
    const destino = document.getElementById("destino");
        dineroDisponible = document.getElementById("dineroDisponible");
        hospedaje = document.getElementById("hospedaje");
        transporte = document.getElementById("transporte");
        comida = document.getElementById("comida");
    localStorage.setItem("hospedaje ", hospedaje.value);
    localStorage.setItem("valor ", destino.value);
    localStorage.setItem("dinero ", dineroDisponible.value);
    localStorage.setItem("transporte ", transporte.value);
}
let calcular = document.getElementById("calcular");
calcular.addEventListener("click", guardarStorage);