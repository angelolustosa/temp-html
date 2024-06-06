const converter = () => {
    // Obtém os valores de entrada
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const unidadeOrigem = document.querySelector('.unidade-origem-select').value;
    const unidadeDestino = document.querySelector('.unidade-destino-select').value;
    //const divResultado = document.querySelector('.resultado.mt-4')
    const divResultado = document.querySelector('.resultado')
  
    // Verifica se o valor de temperatura é um número válido
    if (isNaN(temperatura)) {
      alert('Por favor, insira um valor de temperatura válido.');
      return;
    }
  
    let resultado;
  
    // Realiza a conversão de temperatura
    if (unidadeOrigem === '°C') {
      if (unidadeDestino === 'F') {
        resultado = (temperatura * 9/5) + 32;
      } else if (unidadeDestino === 'K') {
        resultado = temperatura + 273.15;
      } else {
        resultado = temperatura; // Celsius para Celsius
      }
    } else if (unidadeOrigem === 'F') {
      if (unidadeDestino === '°C') {
        resultado = (temperatura - 32) * 5/9;
      } else if (unidadeDestino === 'K') {
        resultado = (temperatura - 32) * 5/9 + 273.15;
      } else {
        resultado = temperatura; // Fahrenheit para Fahrenheit
      }
    } else if (unidadeOrigem === 'K') {
      if (unidadeDestino === '°C') {
        resultado = temperatura - 273.15;
      } else if (unidadeDestino === 'F') {
        resultado = (temperatura - 273.15) * 9/5 + 32;
      } else {
        resultado = temperatura; // Kelvin para Kelvin
      }
    }

    divResultado.innerHTML = `${resultado.toFixed(2)} ${unidadeDestino}`
  
    // Exibe o resultado
   /*  document.querySelector('.resultado').innerHTML = 
      `<div class="alert alert-success">Resultado: ${resultado.toFixed(2)} ${unidadeDestino}</div>`;*/
  } 
  