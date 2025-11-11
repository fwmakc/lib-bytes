import { dec2bytes } from './dec2bytes.helper';

export function bin2bytes(string: string, length = 0): Uint8Array {
  string = String(string).replace(/\s/giu, '');
  return dec2bytes(parseInt(string, 2), length);
}
