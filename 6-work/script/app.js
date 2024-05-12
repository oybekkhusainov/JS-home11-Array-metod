function past(h, m, s){ 

      let milliseconds = 0;
    if (h >= 0 && h <= 23){
      milliseconds += (h * 3600000);
    };
    if (m >= 0 && m <= 59){
      milliseconds += (m * 60000);
    };
    if (s >= 0 && s <= 59){
      milliseconds += (s * 1000);
    };
    
    return milliseconds;
  }
  let result = past(1, 1, 1);
  document.write(result+"ms");