let comentar = document.getElementById("comentar");
let nombre = document.getElementById("nombre");
let opinion = document.getElementById("opinion");
let test = document.getElementById("containerComment");
let compras = document.querySelectorAll("button");

// rrecorran la estructura compras
// a cada elemento le coloca un addEventListener

compras.forEach((elemento) => {
  elemento.addEventListener("click", function () {
    alert("Compra realizada con exito!!");
  });
});

// compras.addEventListener("click", function () {
//   alert("Compra realizada con exito!!");
// });

let verificarCampo = () => {
  event.preventDefault();

  const espacioNombre = nombre.value.trim();
  const espacioOpinion = opinion.value.trim();

  if (espacioNombre === "") {
    alert("Ingrese su nombre maldito estupido");
    return;
  }

  if (espacioOpinion === "") {
    alert("Si quiere puede comentar algo...");
    return;
  }

  const nuevoComentario = document.createElement("div");
  nuevoComentario.classList.add("comment");

  nuevoComentario.innerHTML = `
        <h3>${espacioNombre}</h3>
          <p>"
          ${espacioOpinion}
          ."</p>
    `;

  test.appendChild(nuevoComentario);

  nombre.value = "";
  opinion.value = "";
};
