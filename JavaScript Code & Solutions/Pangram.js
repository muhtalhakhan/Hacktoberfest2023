function isPangram(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  s = s.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (s.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
}
