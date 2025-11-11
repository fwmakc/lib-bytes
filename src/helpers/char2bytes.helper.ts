export function char2bytes(string: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(string);
}
