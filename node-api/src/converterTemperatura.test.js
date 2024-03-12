const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./converterTemperatura');

test('Celsius para Fahrenheit', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(20)).toBe(50);
});

test('Fahrenheit para Celsius', () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(100)).toBe(150);
});
