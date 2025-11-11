import { dec2bytes } from './dec2bytes.helper';

describe('Проверка dec2bytes', () => {
  const testCases = [
    {
      val: 0,
      ref: new Uint8Array([0]),
    },
    {
      val: 1,
      ref: new Uint8Array([1]),
    },
    {
      val: 254,
      ref: new Uint8Array([254]),
    },
    {
      val: 255,
      ref: new Uint8Array([255]),
    },
    {
      val: 256,
      ref: new Uint8Array([1, 0]),
    },
    {
      val: 257,
      ref: new Uint8Array([1, 1]),
    },
    {
      val: 510,
      ref: new Uint8Array([1, 254]),
    },
    {
      val: 511,
      ref: new Uint8Array([1, 255]),
    },
    {
      val: 512,
      ref: new Uint8Array([2, 0]),
    },
    {
      val: 513,
      ref: new Uint8Array([2, 1]),
    },
    {
      val: 65534,
      ref: new Uint8Array([255, 254]),
    },
    {
      val: 65535,
      ref: new Uint8Array([255, 255]),
    },
    {
      val: 65536,
      ref: new Uint8Array([1, 0, 0]),
    },
    {
      val: 65537,
      ref: new Uint8Array([1, 0, 1]),
    },
  ];

  testCases.forEach(({ val, ref }) => {
    it(`Входящая строка: ${val}. Результат: ${ref}`, () => {
      const binary = dec2bytes(val);
      expect(binary).toEqual(ref);
    });
  });
});
