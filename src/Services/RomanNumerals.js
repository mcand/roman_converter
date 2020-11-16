export default {
  toRoman(number) {
    debugger
    if ((!Number.isInteger(number)) || (number <= 0 || number > 4000)) {
      throw Error('Must be integer from 1 to 4000');
    }

    let romanNumber = '';
    const romanNumList = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XV: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let a;
    
    /* eslint-disable */
    for(let key in romanNumList){ // eslint-disable-line no-alert
      a = Math.floor(number / romanNumList[key]);
      if(a >= 0){
        for(let i = 0; i < a; i++){
          romanNumber += key;
        }
      }
      number = number % romanNumList[key];
    }
    /* eslint-enable */
    return romanNumber;
  },
  fromRoman(number) {
    number = number.toUpperCase();
    const romanNumberList = ['CM','M','CD','D','XC','C','XL','L','IX','X','IV','V','I'];
    const arabicNumber = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
    let index = 0, num = 0;
    
    /* eslint-disable */
    for(let romanNumber in romanNumberList){ // eslint-disable-line no-alert
      index = number.indexOf(romanNumberList[romanNumber]);
      while(index != -1){
        num += parseInt(arabicNumber[romanNumber]);
        number = number.replace(romanNumberList[romanNumber],'-');
        index = number.indexOf(romanNumberList[romanNumber]);
      }
    }
    /* eslint-enable */
    if (num == 0) {
      throw Error('Invalid roman number');
    }
    return num;
  },
}