import { hex2bytes } from './hex2bytes.helper';

describe('Проверка hex2bytes', () => {
  const testCases = [
    {
      val: '9',
      len: 0,
      ref: new Uint8Array([9]),
    },
    {
      val: '01 05 09',
      len: 0,
      ref: new Uint8Array([1, 5, 9]),
    },
    {
      val: '00FF',
      len: 2,
      ref: new Uint8Array([0, 0x00ff]),
    },
    {
      val: '7 F 8 1',
      len: 0,
      ref: new Uint8Array([127, -127]),
    },
    {
      val: 'a1 c5 e9',
      len: 2,
      ref: new Uint8Array([0xc5, 0xe9]),
    },
  ];

  testCases.forEach(({ val, len, ref }) => {
    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const binary = hex2bytes(val, len);
      expect(binary).toEqual(ref);
    });
  });
});
