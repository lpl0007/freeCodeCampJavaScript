function confirmEnding(str1, str2) {
  if (str2.len > str1.len) {
    return false;
  } else if (str1.slice(-str2.length) == str2) {
    return true;
  } else {
    return false;
  }
}
