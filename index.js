function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let mensaje = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  let textoCifrado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  // si quiero q funcione también para mayusculas agregar al modificador 'g' la 'i' -> 'gi'

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    mensaje.textContent = "Lo has logrado 😀";
    imagen.src = "./img/encriptado.svg";
  } else {
    imagen.src = "./img/notFound.svg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado 🤔";
    mensaje.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto 😐", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let mensaje = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  let textoCifrado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito 😎";
    mensaje.textContent = "Menudo mensaje";
    imagen.src = "./img/desencriptado.svg";
  } else {
    imagen.src = "./img/notFound.svg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado 🤔";
    mensaje.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto 😐", "warning");
  }
}


function copiar() {
  let textoCopiado = document.getElementById('texto').value;      // solo con estas 2 lineas puedes copiar, 1era linea
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let mensaje = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  navigator.clipboard.writeText(textoCopiado)                      //2da linea
    .then(() => {
      imagen.src = "./img/copy.svg";     
      tituloMensaje.textContent = "Texto copiado al portapapeles ✔️";
      mensaje.textContent = "El texto ha sido copiado exitosamente. ¡Puedes pegarlo en otro lugar!";
    })
    .catch(error => {
      tituloMensaje.textContent = "Error al copiar el texto al portapapeles ❌";
      console.error("Error al copiar el texto al portapapeles:", error);
    });

}
