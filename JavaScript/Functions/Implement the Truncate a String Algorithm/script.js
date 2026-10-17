function truncateString(str, len) {
  if (str.length <= len) {
    return str;
  } else {
    return str.slice(0, len) + "...";
  }
}
