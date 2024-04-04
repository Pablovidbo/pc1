//arrays de presidentes del peru desde FUJIMORI

let contratados = [ 
    {
        "nombre" : "Juan Perez",
        "oficio" : "Carpintero"
    },
    {
        "nombre" : "Maria Garcia",
        "oficio" : "Jardinero"
    },
    {
        "nombre" : "Pedro Lopez",
        "oficio" : "Fontanero"
    },
    {
        "nombre" : "Ana Martinez",
        "oficio" : "Inspector de calidad"
    },
    {
        "nombre" : "Luisa Rodriguez",
        "oficio" : "Supervisor de obra"
    },
    {
        "nombre" : "Carlos Sanchez",
        "oficio" : "Electricista"
    },
    {
        "nombre" : "Laura Fernandez",
        "oficio" : "Jardinero"
    },
    {
        "nombre" : "Miguel Gonzalez",
        "oficio" : "Pintor"
    },
    {
        "nombre" : "Sofía Diaz",
        "oficio" : "Estilista"
    },
    {
        "nombre" : "Daniel Ramirez",
        "oficio" : "Plomero"
    },
];

function asignarContratados(){
    const contratadoElement = document.getElementById("contratados");
    let contenido = "";
    contratados.forEach(function(contratado) {    
        const template = `
            <div class="contratado">
                <div class="data">
                    <h4>${contratado.nombre}</h4>
                </div>
                <div class="oficio">
                    ${contratado.oficio}
                </div>
            </div>
        `;
        contenido = contenido + template;
    });
    contratadoElement.innerHTML = contenido;
}

asignarContratados();

const boton = document.getElementById("sendContratado");

boton.addEventListener("click", function(){
    const nombre = document.getElementById("nombreContratado").value;
    const oficio = document.getElementById("oficioContratado").value;
    const newContratado = new Object();
    newContratado.nombre = nombre;
    newContratado.oficio = oficio;
    contratados.push(newContratado);
    alert("Has contratado a:"+ newContratado.nombre);
    //repetir la funcion
    asignarContratados();
});


