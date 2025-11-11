import { Binary } from './binary.class';

describe('Проверка работы класса Binary', () => {
  const testCases = ['Test string', '123', 123];

  testCases.forEach((value) => {
    it(`Входящая строка: ${value}`, () => {
      const binary = new Binary(value);
      expect(binary.data).toBe(value);
    });
  });
});
