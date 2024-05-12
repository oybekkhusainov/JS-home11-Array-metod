function countPositivesSumNegatives(input) {
    if(!input || input == 0) {
       }
       let musbat = 0;
       let manfiy = 0;
       for(let i = 0; i < input.length; i++) {
            if(input[i] > 0) {
                 musbat++
            }if (input[i] < 0) {
                 manfiy += input[i]
            }
       }
       return [musbat, manfiy]
  }

  let result = countPositivesSumNegatives([1, 2, 3, 4, 5, 6,-9,-7,-8]);

  document.write(result)