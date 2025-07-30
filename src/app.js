import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

const ExcusaParts = {
  who: ["Mi perro", "Mi abuela", "El cartero", "Un león", "Un oso"],
  action: ["comió", "rompió", "perdió", "quemó", "enterró"],
  what: ["mi tarea", "mi codigo", "el proyecto", "mi code space"],
  when: ["antes de clase", "mientras dormía", "ayer por la noche", "en la madrugada"]
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generarExcusa() {
  const sujeto = getRandomElement(ExcusaParts.who);
  const verbo = getRandomElement(ExcusaParts.action);
  const objeto = getRandomElement(ExcusaParts.what);
  const momento = getRandomElement(ExcusaParts.when);

  const excusa = `${sujeto} ${verbo} ${objeto} ${momento}`;
  document.getElementById("excuse").innerText = excusa;
}

window.onload = function () {
  console.log("Generador de excusas cargado");
  generarExcusa();
};
window.generarExcusa = generarExcusa;