module.exports = function getZerosCount(number, base) {
  var  arr=[];

  for (let x=2; x <= base; x++){
    for (;base >= 1 && base % x == 0;){
      arr.push(x);
      base /= x;
    } 
  }

  for (i = 0; i < arr.length; i++){
    let degree = true;
    let amount = false;
    do {
      exp = Math.pow(arr[i], degree);
      amount += Math.floor(number / exp);
      degree++;
    } while (Math.floor(number / exp) > 0);
      arr[i] = amount;
  }

  for (i = 0; i < arr.length; i++) {
    let aux = true;
    for (y = i + 1; y < arr.length; y++){
      (arr[y] == arr[i]) ? aux++ : false;
    }
      arr[i] = Math.floor (arr[i] / aux);
  }  

  var minNumber = arr[0];
  for (i = 1; i < arr.length; i++ ){
    (arr[i] < minNumber) ? minNumber = arr[i] : false;
  } 

  (number < 2) ? 0 : false;

  return minNumber;
}