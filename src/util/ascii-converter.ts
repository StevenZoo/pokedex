function getAsciiOffset(key: string, index: number = 0): number {
  return key.charCodeAt(index) - "a".charCodeAt(0);
}

function getAsciiChar(code: number): string {
  return String.fromCharCode(code + "a".charCodeAt(0));
}

export { getAsciiOffset, getAsciiChar };
