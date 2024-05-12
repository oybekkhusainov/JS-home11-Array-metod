function createArray(number){
    let newa = [];
    for(let i = 1; i <= number; i++){
      newa.push(i);
    }
    return newa;
  }
  let result = createArray(10);
  document.write(result)