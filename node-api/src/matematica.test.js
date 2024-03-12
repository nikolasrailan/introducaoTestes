const dividir = require('./matematica');

test('lanã uma exceção ao dividir por zero', () => {
  expect(() => dividir(5, 0).toThrow('Divisão por zero não é permitida'));
})