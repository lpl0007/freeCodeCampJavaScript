function repeatStringNumTimes(str, num) {
  let retStr = "";
  if (num <= 0) {
    return "";
  } else {
    let i = 0;
    while (i < num) {
      i++;
      retStr += str;
    }
  }
  return retStr;
}