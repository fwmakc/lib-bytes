import { splitString } from './split_string.helper';

export function bytes2bin(bytes: Uint8Array, blocks = 0): string {
  let binaryString = '';

  // Проходим по каждому элементу Uint8Array
  // for (let i = 0; i < bytes.length; i++) {
  for (let i = bytes.length - 1; i >= 0; i--) {
    binaryString += bytes[i].toString(2).padStart(8, '0');
  }

  if (blocks) {
    binaryString = splitString(binaryString, blocks);
  }

  return binaryString;
}
