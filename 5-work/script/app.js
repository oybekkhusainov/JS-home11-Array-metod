function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 == 0)return false;
    if(flower1 % 2 != 0 && flower2 % 2 != 0)return false;
    return true;
  }

  let result = lovefunc(6,25);

  document.write(result)

