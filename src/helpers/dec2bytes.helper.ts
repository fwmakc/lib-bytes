export function dec2bytes(number: number, length = 0): Uint8Array {
  const buffer = new BigUint64Array([BigInt(number)]).buffer;
  let rev = Buffer.from(buffer).reverse();

  const firstIndex = rev.findIndex((item) => item > 0);
  rev = rev.slice(firstIndex);

  if (length) {
    rev = extendArray(rev, length);
  }

  return new Uint8Array(rev);
}

function extendArray(buffer: Buffer<ArrayBuffer>, desiredLength: number) {
  const currentLength = buffer.length;

  if (currentLength >= desiredLength) {
    return buffer.slice(desiredLength - 1);
  }

  const zerosNeeded = desiredLength - currentLength;
  const newBuffer = Buffer.alloc(desiredLength);

  buffer.copy(newBuffer, zerosNeeded);

  return newBuffer;
}
