function chunkArrayInGroups(arr, size) {
  const chunks = [];

  for (let index = 0; index < arr.length; index += size) {
    chunks.push(arr.slice(index, index + size));
  }

  return chunks;
}