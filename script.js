function obterDataHoraAtual() {
  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');
  return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
}

function atualizarDataHora() {
  const dataHoraInput = document.getElementById('dataHora');
  dataHoraInput.value = obterDataHoraAtual();
}

atualizarDataHora();

setInterval(atualizarDataHora, 60000); 

function checkInputValidity(input) {
  const value = input.value;
  if (value.length !== 6 || !/^\d+$/.test(value)) {
    input.setCustomValidity("Digite exatamente 6 dígitos.");
  } 
  else {
    input.setCustomValidity("");
  }
}
