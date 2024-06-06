document.getElementById('temperature-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var temperature = parseFloat(document.getElementById('temperature').value);
    var scale = document.getElementById('scale').value;
    var result = 0;

    if (scale === 'celsius') {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').innerText = temperature + '°C = ' + result.toFixed(2) + '°F';
    } else if (scale === 'fahrenheit') {
        result = (temperature - 32) * 5/9;
        document.getElementById('result').innerText = temperature + '°F = ' + result.toFixed(2) + '°C';
    }
});