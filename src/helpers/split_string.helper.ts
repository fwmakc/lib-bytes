export function splitString(string: string, n = 0): string {
  if (!string || !n) {
    return string;
  }

  const chunks = [];
  let count = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    chunks.push(string[i]);
    count++;

    if (count % n === 0 && i !== 0) {
      chunks.push(' ');
    }
  }

  return chunks.reverse().join('');
}
