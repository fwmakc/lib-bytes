import { Bytes } from './bytes.class';

type Methods =
  | 'bit8'
  | 'bit8s'
  | 'bit16'
  | 'bit16s'
  | 'bit32'
  | 'bit32s'
  | 'bin'
  | 'hex';

describe('Проверка работы класса Bytes', () => {
  const testCases = [
    {
      value: 65535,
      ref: [
        // {
        //   title: 'Беззнаковое 8-битное',
        //   method: 'bit8',
        //   equal: [30, 255],
        // },
        // {
        //   title: 'Знаковое 8-битное',
        //   method: 'bit8s',
        //   equal: [30, 255],
        // },
        // {
        //   title: 'Беззнаковое 16-битное',
        //   method: 'bit16',
        //   equal: [65530],
        // },
        // {
        //   title: 'Знаковое 16-битное',
        //   method: 'bit16s',
        //   equal: [65530],
        // },
        // {
        //   title: 'Беззнаковое 32-битное',
        //   method: 'bit32',
        //   equal: [65530],
        // },
        {
          title: 'Знаковое 32-битное',
          method: 'bit32s',
          equal: [65530],
        },
        {
          title: 'Двоичное',
          method: 'bin',
          equal: '1111111111111111',
        },
        {
          title: 'Шестнадцатеричное',
          method: 'hex',
          equal: 'FFFF',
        },
      ],
    },
  ];

  testCases.forEach(({ value, ref }) => {
    const bytes = new Bytes(value);

    ref.forEach(({ title, method, equal }) => {
      it(`${title}: ${equal}`, () => {
        const result = bytes[method as Methods]();
        expect(result).toBe(equal);
      });
    });
  });
});
