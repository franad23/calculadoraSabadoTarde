const formCalculadora = document.getElementById("formCalculadora");
const textResultado = document.getElementById("textResultado");

formCalculadora.addEventListener("submit", function (e) { //EVENT EVENTO
  e.preventDefault(); //Evitar el funcionamiento predeterminado del Formulario
  const primerNumero = parseInt(e.target.primerNumero.value);
  const segundoNumero = parseInt(e.target.segundoNumero.value);
  const operacion = e.target.operacion.value.toLowerCase().slice(0,2).trim();
  
  if (!operacion || !segundoNumero || !primerNumero) {
    alert("Por favor ingrese todos los campos");
  }

  textResultado.innerText = "Calculando...";

  setTimeout(() => {
    switch (operacion) {
      case "su":
        textResultado.innerText = `El resultado es ${primerNumero + segundoNumero}`;
        break;
      case "re":
        textResultado.innerText = `El resultado es ${primerNumero - segundoNumero}`;
        break;
      case "mu":
        textResultado.innerText = `El resultado es ${primerNumero * segundoNumero}`;
        break;
      case "di":
        textResultado.innerText = `El resultado es ${primerNumero / segundoNumero}`;
        break;
      default:
        alert("Por favor ingrese una operación válida");
        textResultado.innerText = "Por favor ingrese una operación válida";
        break;
    }
  }, 2000);
})