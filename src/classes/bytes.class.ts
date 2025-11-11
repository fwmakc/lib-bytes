export class Bytes {
  number: number;

  constructor(number: number) {
    this.number = number;
  }

  // Знаковое 8-битное представление
  bit8s() {
    return this.get8Bit(true);
  }

  // Беззнаковое 8-битное представление
  bit8() {
    return this.get8Bit();
  }

  // Знаковое 16-битное представление
  bit16s() {
    return this.get16Bit(true);
  }

  // Беззнаковое 16-битное представление
  bit16() {
    return this.get16Bit();
  }

  // Знаковое 32-битное представление
  bit32s() {
    return this.get32Bit(true);
  }

  // Беззнаковое 32-битное представление
  bit32() {
    return this.get32Bit();
  }

  // Внутренний метод для получения 8-битных представлений
  private get8Bit(signed = false) {
    const bytes = [];
    let num = signed ? this.number : this.number >>> 0; // Для беззнаковых сдвигаем без знака

    while (num !== 0) {
      bytes.push(num & 0xff); // Извлекаем младшие 8 бит
      num >>= 8; // Сдвигаем число на 8 бит вправо
    }

    return bytes;
  }

  // Внутренний метод для получения 16-битных представлений
  private get16Bit(signed = false) {
    const bytes = [];
    let num = signed ? this.number : this.number >>> 0;

    while (num !== 0) {
      bytes.push(num & 0xffff); // Извлекаем младшие 16 бит
      num >>= 16; // Сдвигаем число на 16 бит вправо
    }

    return bytes;
  }

  // Внутренний метод для получения 32-битных представлений
  private get32Bit(signed = false) {
    const bytes = [];
    let num = signed ? this.number : this.number >>> 0;

    while (num !== 0) {
      bytes.push(num & 0xffffffff); // Извлекаем младшие 32 бита
      num >>>= 32; // Сдвигаем число на 32 бита вправо
    }

    return bytes;
  }

  // Двоичное представление
  bin() {
    return this.number.toString(2); // Преобразуем число в двоичный формат
  }

  // Шестнадцатеричное представление
  hex() {
    return this.number.toString(16).toUpperCase(); // Преобразуем число в шестнадцатеричный формат
  }
}
