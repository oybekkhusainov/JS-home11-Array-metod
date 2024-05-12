function porte(n) {
    //   if (n <= 1) return false
      for (let i = 2 ; i < n ; i++){

          if (n % i == 0)return false
      }
      return true
  }
  let result = porte(-8);
  document.write(result)