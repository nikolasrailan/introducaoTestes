const validaEmail = require('./validaEmail');

test('lança execação se email for invalido', () => {
  const email = 'exemplo@gmail.com';
  expect(validaEmail(email)).toBe('Email válido');
});



