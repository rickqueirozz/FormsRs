function obterDataHoraAtual() {
  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0'); 
  const dia = String(agora.getDate()).padStart(2, '0');
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');
  return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
}

document.getElementById('dataHora').value = obterDataHoraAtual();

function checkInputValidity(input) {
  const value = input.valueAsNumber;
  if (value > 999999) {
    input.setCustomValidity("Digite no máximo 6 dígitos.");
  } else {
    input.setCustomValidity("");
  }
}