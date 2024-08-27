document.addEventListener("DOMContentLoaded", function () {
  var input1 = document.querySelector("textarea#texto-entrada");
  var message = document.getElementById("mensagem");

  var button1 = document.querySelector("button.botao__criptografar");
  button1.onclick = encriptar;

  var button2 = document.querySelector("button.botao__descriptografar");
  button2.onclick = descriptar;

  const button3 = document.querySelector("button.botao__copiar");
  button3.onclick = copiar;

  document.querySelector("button.botao__copiar").style.display = "none";
  document.querySelector("textarea#texto-saida").style.display = "none";

  input1.focus();

  function validarTexto(texto) {
    var regex = /^[a-z\s]+$/;
    return regex.test(texto);
  }

  // Função criptografar//
  function encriptar() {
    console.log(input1.value);

    if (input1.value.length == 0) {
      document.getElementById("nada").innerHTML =
        '<h2 id="nada">Nenhuma mensagem encontrada</h2>';
      input1.focus();
    } else if (!validarTexto(input1.value)) {
      document.getElementById("nada").innerHTML =
        "O texto deve conter apenas letras minúsculas sem acentos.";
      input1.focus();
    } else {
      document.getElementById("nada").innerHTML = "";
      document.querySelector("img#icone").style.display = "none";
      document.querySelector("textarea#texto-saida").style.display = "";
      document.querySelector("button.botao__copiar").style.display = "block";

      //chaves pra criptografar
      var text = input1.value;
      var txt = text.replace(/e/gim, "enter");
      var txt = txt.replace(/i/gim, "imes");
      var txt = txt.replace(/a/gim, "ai");
      var txt = txt.replace(/o/gim, "ober");
      var txt = txt.replace(/u/gim, "ufat");

      document.getElementById("texto-saida").innerHTML = `${txt}`;
    }
  }

  function descriptar() {
    if (input1.value.length == 0) {
      document.getElementById("nada").innerHTML =
        '<h2 id="none">Nenhuma mensagem encontrada</h2>';
      document.querySelector("img#icone").style.display = "none";
      input1.focus();
    } else if (!validarTexto(input1.value)) {
      document.getElementById("nada").innerHTML =
        "O texto deve conter apenas letras minúsculas sem acentos.";
      input1.focus();
    } else {
      document.getElementById("nada").innerHTML = "";
      document.querySelector("img#icone").style.display = "none";
      document.getElementById("texto-entrada").innerHTML = "";
      document.querySelector("button.botao__copiar").style.display = "block";

      var text = input1.value;
      var txt = text.replace(/enter/gim, "e");
      txt = txt.replace(/imes/gim, "i");
      txt = txt.replace(/ai/gim, "a");
      txt = txt.replace(/ober/gim, "o");
      txt = txt.replace(/ufat/gim, "u");

      document.querySelector("textarea#texto-saida").style.display = "";
      document.getElementById("texto-saida").innerHTML = `${txt}`;

      document.getElementById("copiar").innerHTML =
        '<button class="botao__descriptografar" onclick="copiar()">Copiar</button>';
    }
  }

  function copiar() {
    document.querySelector("#texto-saida").select();
    document.execCommand("copy");
    message.innerHTML = "O texto copiado já está na área de transferência!";
    document.querySelector("#texto-entrada").value = "";
  }
});
