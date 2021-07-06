function getAsciiCode(key: string, index: number = 0): number {
  return key.charCodeAt(index);
}

function getAsciiChar(code: number): string {
  return String.fromCharCode(code);
}

export { getAsciiCode, getAsciiChar };
