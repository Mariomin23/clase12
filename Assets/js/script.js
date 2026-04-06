function suma(event) {
  event.preventDefault();
  let suma1 = Number(document.getElementById("s1").value);
  let suma2 = Number(document.getElementById("s2").value);
  let resultadosuma = suma1 + suma2;
  document.getElementById("resuma").innerText="resultado " + resultadosuma;
}

function resta(event) {
  event.preventDefault();
  let resta1 = Number(document.getElementById("r1").value);
  let resta2 = Number(document.getElementById("r2").value);
  let resultadoresta = resta1 - resta2;
  document.getElementById("reresta").innerText="resultado " + resultadoresta;
}
function multiplicacion(event) {
  event.preventDefault();
  let multiplica1 = Number(document.getElementById("m1").value);
  let multiplica2 = Number(document.getElementById("m2").value);
  let resultadomultiplica = multiplica1 * multiplica2;
  document.getElementById("remultiplica").innerText="resultado " + resultadomultiplica;
}
function divide(event) {
  event.preventDefault();
  let divide1 = Number(document.getElementById("d1").value);
  let divide2 = Number(document.getElementById("d2").value);
  let resultadodivide = divide1 / divide2;
  document.getElementById("resdiv").innerText="resultado " + resultadodivide;
}