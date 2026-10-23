function findLongestWordLength(sentence) {
  const words = sentence.trim().split(/\s+/);

  if (words.length === 1 && words[0] === "") {
    return 0;
  }

  let longestWordLength = 0;

  for (const word of words) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }

  return longestWordLength;
}