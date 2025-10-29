// calculadora.test.js
const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

test('somar 2 + 3 = 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('subtrair 5 - 2 = 3', () => {
  expect(subtrair(5, 2)).toBe(3);
});

test('multiplicar 2 * 3 = 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('dividir 6 / 2 = 3', () => {
  expect(dividir(6, 2)).toBe(3);
});

test('dividir por zero deve lançar erro', () => {
  expect(() => dividir(5, 0)).toThrow('Divisão por zero');
});
