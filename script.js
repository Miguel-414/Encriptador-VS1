const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function encriptar(texto, desplazamiento) {
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra === ' ') {
      resultado += ' ';
      continue;
    }
    let indice = alfabeto.indexOf(letra.toLowerCase());
    let nuevoIndice = (indice + desplazamiento) % 26;
    if (nuevoIndice < 0) {
      nuevoIndice += 26;
    }
    let nuevaLetra = alfabeto[nuevoIndice];
    if (letra === letra.toUpperCase()) {
      nuevaLetra = nuevaLetra.toUpperCase();
    }
    resultado += nuevaLetra;
  }
  return resultado;
}

function desencriptar(texto, desplazamiento) {
  return encriptar(texto, -desplazamiento);
}

const textoSinEncriptar = document.getElementById('texto-sin-encriptar');
const textoEncriptado = document.getElementById('texto-encriptado');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');

botonEncriptar.addEventListener('click', () => {
  let texto = textoSinEncriptar.value;
  let desplazamiento = 3; // Cambia esto para cambiar el desplazamiento
  let textoEncriptadoValor = encriptar(texto, desplazamiento);
  textoEncriptado.value = textoEncriptadoValor;
});

botonDesencriptar.addEventListener('click', () => {
  let texto = textoEncriptado.value;
  let desplazamiento = 3; // Cambia esto para cambiar el desplazamiento
  let textoSinEncriptarValor = desencriptar(texto, desplazamiento);
  textoSinEncriptar.value = textoSinEncriptarValor;
});

