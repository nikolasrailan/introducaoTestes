test('nome do teste', () => {
  //codigo do teste
});
//é estritamente igual a valor esperado   ===
expect(resultado).toBe(valorEsperado);

//é igual a valor espera == bom pra arrays
expect(resultado).toEqual(valorEsperdo);

//verifica se o array contem o elemento
expect(array).toContain(elemento);