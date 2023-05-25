function converterTemperatura() {
    var temperaturaInput = document.getElementById("temperatura").value;
    var unidadeOrigem = document.getElementById("unidadeOrigem").value;
    
    // Converte para Celsius
    var temperaturaCelsius;
    if (unidadeOrigem === "Celsius") {
        temperaturaCelsius = parseFloat(temperaturaInput);
    } else if (unidadeOrigem === "Fahrenheit") {
        temperaturaCelsius = (parseFloat(temperaturaInput) - 32) / 1.8;
    } else if (unidadeOrigem === "Kelvin") {
        temperaturaCelsius = parseFloat(temperaturaInput) - 273.15;
    }
    
    // Converte para Fahrenheit
    var temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32;
    
    // Converte para Kelvin
    var temperaturaKelvin = temperaturaCelsius + 273.15;
    
    // Atualiza o fundo da página com base na temperatura em Celsius
    if (temperaturaCelsius < 10) {
        document.body.style.backgroundColor = "#4286f4";
    } else if (temperaturaCelsius < 20) {
        document.body.style.backgroundColor = "#f4d142";
    } else {
        document.body.style.backgroundColor = "#f44242";
    }
    
    // Exibe os resultados das conversões
    alert("Temperatura em Celsius: " + temperaturaCelsius.toFixed(2) + " °C\n" +
          "Temperatura em Fahrenheit: " + temperaturaFahrenheit.toFixed(2) + " °F\n" +
          "Temperatura em Kelvin: " + temperaturaKelvin.toFixed(2) + " K");
}