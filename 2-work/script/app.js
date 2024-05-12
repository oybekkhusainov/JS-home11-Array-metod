let arr = [2,6];
let dark = [];

function numberToPower(){
    dark = arr.reduce((a,b) => a**b);
     return dark

}
document.write(numberToPower(dark));