const encrypt = () => {
  let inputTexto = document.getElementById('input-texto');
  let texto = inputTexto.value.toLowerCase();

  let textoEncriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');

  let mensajePredeterminado = document.querySelector('.mensaje-predeterminado');
  mensajePredeterminado.style.display = 'none';
  let myInput = document.getElementById('myInput');
  myInput.style.display = 'block';
  myInput.innerHTML = textoEncriptado;
};

const decrypt = () => {
  let inputTexto = document.getElementById('input-texto');
  let texto = inputTexto.value;

  let textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

  let mensajePredeterminado = document.querySelector('.mensaje-predeterminado');
  mensajePredeterminado.style.display = 'none';
  let myInput = document.getElementById('myInput');
  myInput.style.display = 'block';
  myInput.innerHTML = textoEncriptado;
  
};

const copy = () => {
  var text = document.getElementById('myInput').innerHTML;
  navigator.clipboard.writeText(text);
};