let dark = [2,4,6,7,9]
let bord =[]

function filterRange() {
  bord = dark.reduce((a, b) => a+b)/2
  return bord
} 
document.write(filterRange(bord))