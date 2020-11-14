export default {
  toRoman(number) {
    if (!Number.isInteger(number) || (number <= 0 || number > 4000)) {
      throw Error('Must be integer from 1 to 4000');
    }

    let romanNumber = '';
    const romanNumList = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XV: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let a;

    for(let key in romanNumList){
      a = Math.floor(number / romanNumList[key]);
      if(a >= 0){
        for(let i = 0; i < a; i++){
          romanNumber += key;
        }
      }
      number = number % romanNumList[key];
    }
    return romanNumber;
  },
  fromRoman(number) {
    number = number.toUpperCase();
    const romanNumberList = ['CM','M','CD','D','XC','C','XL','L','IX','X','IV','V','I'];
    const arabicNumber = [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1];
    let index =  0, num = 0;
    
    for(let romanNumber in romanNumberList){
      index = number.indexOf(romanNumberList[romanNumber]);
      while(index != -1){
        num += parseInt(arabicNumber[romanNumber]);
        number = number.replace(romanNumberList[romanNumber],'-');
        index = number.indexOf(romanNumberList[romanNumber]);
      }
    }
    if (num == 0) {
      throw Error('Invalid roman number');
    }
    return num;
  },
}