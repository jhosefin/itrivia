import "./styles.css";

document.querySelectorAll("a#next").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.target.href =
      e.target.href + "?nombre=" + document.getElementById("usuario").value;
  });
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nombre = urlParams.get("nombre");
if (nombre != null) {
  document.getElementById("nombre").innerHTML = "WELCOME!! " + nombre;
}

document.querySelectorAll('input[name="color"]').forEach((input) => {
  input.addEventListener("click", (e) => {
    const link =
      document.getElementById("next").href +
      "?" +
      urlParams +
      "&" +
      window.location.pathname.replace("/", "") +
      "=" +
      e.target.value;
    window.location.href = link;
  });
});
if (window.location.pathname == "/puntuacion.html") {
  let puntos = 0;
  if (urlParams.get("index2.html") == "Yellow") {
    puntos += 1;
  }
  console.log(urlParams.get("index3.html"));
  if (urlParams.get("index3.html") == "Blue") {
    puntos += 1;
  }
  if (urlParams.get("index4.html") == "Green") {
    puntos += 1;
  }
  document.getElementById("puntos").innerHTML =
    "Obtuviste: " + puntos + " puntos.";
  let mensaje =
    urlParams.get("index2.html") +
    ", " +
    urlParams.get("index3.html") +
    " y " +
    urlParams.get("index4.html");
  document.getElementById("mensaje").innerHTML =
    "Tus respuestas seleccionadas son: " + mensaje;
}
