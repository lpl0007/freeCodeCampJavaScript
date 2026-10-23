function mutation(arr) {
  const firstString = arr[0].toLowerCase();
  const secondString = arr[1].toLowerCase();

  for (const letter of secondString) {
    if (!firstString.includes(letter)) {
      return false;
    }
  }

  return true;
}