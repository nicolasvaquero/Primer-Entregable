/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
  const nombre = prompt("Ingrese su nombre:");

  function calculoEdad(){
    const anioNacimiento = parseInt(prompt("En que año naciste?"));
    const edad = 2022 - anioNacimiento;
    return edad;
  }
  const edad = calculoEdad();

  const ciudad = prompt("Ingrese su Ciudad:");
  const interesJs = confirm("Esta interesado en JavaScript");

  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = interesJs;

  console.table(datosPersona);
  

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreUsuario = document.getElementById("nombre");
  const edadUsuario = document.getElementById("edad");
  const ciudadUsuario = document.getElementById("ciudad");
  const javascriptUsuario = document.getElementById("javascript");

  nombreUsuario.innerText += datosPersona.nombre;
  edadUsuario.innerText = datosPersona.edad;
  ciudadUsuario.innerText = datosPersona.ciudad;
  javascriptUsuario.innerText = datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const materias = document.getElementById("fila");
  materias.innerHTML = "";

  listado.forEach((materia) => {
    materias.innerHTML += `<ul "card-header">
    <li class="caja">
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}"
    </li>
    <li class="caja">
      <p class="lenguajes">
      ${materia.lenguajes}
      </p>
    </li>
    <li class="caja">
    <p class="lenguajes">
    ${materia.bimestre}
    </p>
    </li>
  </ul>"`;
  });


}


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

