import { bin2bytes } from './bin2bytes.helper';

describe('Проверка bin2bytes', () => {
  const testCases = [
    {
      val: '1001',
      ref: new Uint8Array([9]),
    },
    {
      val: '0000 0001 0000 0101 0000 1001',
      ref: new Uint8Array([1, 5, 9]),
    },
    {
      val: '0000000011111111',
      ref: new Uint8Array([255]),
    },
    {
      val: '01111111 10000001',
      ref: new Uint8Array([127, -127]),
    },
  ];

  testCases.forEach(({ val, ref }) => {
    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const binary = bin2bytes(val);
      expect(binary).toEqual(ref);
    });
  });
});
