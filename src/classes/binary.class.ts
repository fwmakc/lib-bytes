/**
 * 218 - dec: 218
 * 0332 - dec: 218
 * 0o0332 - dec: 218
 * 0o332 - dec: 218
 * 0b000011011010 - dec: 218
 * 0b11011010 - dec: 218
 * 0xDA - dec: 218
 * 0xda - dec: 218
 *
 * bin
 * binArray
 * hex
 * hexArray
 * dec
 * string
 * buffer = bytes
 */
export class Binary {
  data = new Uint8Array(8);

  constructor(data: any) {
    if (!data) {
      return;
    }

    this.determineData(data);
  }

  determineData(data: any) {
    const type = typeof data;

    if (Array.isArray(data)) {
      this.data = new Uint8Array(Buffer.from(data), 0, 8);
      return;
    }

    if (type === 'object') {
      return;
    }

    if (type === 'number') {
      this.determineNumber(data.valueOf());
      return;
    }

    if (type === 'string') {
      const dataString = String(data).replace(/\s/giu, '');

      if (/^[01]+$/.test(dataString)) {
        this.determineNumber(parseInt(dataString, 2));
        return;
      }

      if (/^[0-9a-fA-F]+$/.test(dataString)) {
        this.determineNumber(parseInt(dataString, 16));
        return;
      }

      const encoder = new TextEncoder();
      this.data = encoder.encode(data);
    }
  }

  determineNumber(number: number) {
    this.data = new Uint8Array(new BigUint64Array([BigInt(number)]).buffer);
  }
}
