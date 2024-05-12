function getAverage(marks){
    let sum = 0;
    marks.forEach(point => {
        sum += point
    });
    return Math.floor(sum / marks.length)
}

let result = getAverage([6,2,3,5]);

document.write(result)