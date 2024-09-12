const BASE_64_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const encodeBase64 = (str: string) => {
  let binary = '';
  for (let i = 0; i < str.length; i++) {
    binary += String.fromCharCode(str.charCodeAt(i));
  }

  let base64 = '';
  for (let i = 0; i < binary.length; i += 3) {
    const triplet =
      (binary.charCodeAt(i) << 16) |
      (binary.charCodeAt(i + 1) << 8) |
      binary.charCodeAt(i + 2);
    base64 += BASE_64_CHARS[(triplet >> 18) & 0x3f];
    base64 += BASE_64_CHARS[(triplet >> 12) & 0x3f];
    base64 += BASE_64_CHARS[(triplet >> 6) & 0x3f];
    base64 += BASE_64_CHARS[triplet & 0x3f];
  }

  const pad = str.length % 3;
  if (pad === 1) {
    base64 = base64.slice(0, -2) + '==';
  } else if (pad === 2) {
    base64 = base64.slice(0, -1) + '=';
  }

  return base64;
};

export { encodeBase64 };
