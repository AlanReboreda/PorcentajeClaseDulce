let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let numeroA: number = Number(dato.value);
  let numeroB: number = Number(dato2.value);
  let porcentaje: number = numeroA / "100";
  let resultado: number = porcentaje * numeroB;
  console.log("el descuento es:");
  console.log(resultado);
});
