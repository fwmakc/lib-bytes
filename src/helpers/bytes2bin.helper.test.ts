import { bytes2bin } from './bytes2bin.helper';

describe('Проверка bytes2bin', () => {
  const testCases = [
    {
      val: new Uint8Array([9]),
      ref: '00001001',
      blocks: 0,
    },
    {
      val: new Uint8Array([9, 5, 1]),
      ref: '0000 0001 0000 0101 0000 1001',
      blocks: 4,
    },
    {
      val: new Uint8Array([255, 256]),
      ref: '0000000011111111',
      blocks: 0,
    },
    {
      val: new Uint8Array([-127, 127]),
      ref: '01111111 10000001',
      blocks: 8,
    },
  ];

  testCases.forEach(({ val, ref, blocks }) => {
    it(`Входящий массив: ${val}. Результат: ${ref}`, () => {
      const binary = bytes2bin(val, blocks);
      expect(binary).toBe(ref);
    });
  });
});
