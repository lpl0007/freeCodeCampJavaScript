function fearNotLetter(string) {
  for (let index = 1; index < string.length; index++) {
    const previousLetterCode = string.charCodeAt(index - 1);
    const currentLetterCode = string.charCodeAt(index);

    if (currentLetterCode - previousLetterCode > 1) {
      return String.fromCharCode(previousLetterCode + 1);
    }
  }
}