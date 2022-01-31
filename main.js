function showVerticalMessage(str) {
  let ourStr;

  if (str.startsWith('м')) {
    ourStr = str[0].toUpperCase() + str.slice(1);
  }

  for (let char of ourStr.slice(0, 10)) {
  console.log(char);
  }
}

showVerticalMessage('марафон'); 




  





