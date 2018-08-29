function sumInRange(array){
    const start = Math.min(...array);
    const end = Math.max(...array);
    let sum = 0;
    for (let i = start; i <= end; i++){
        sum += i;
    }
    
    return sum;
}

console.log(sumInRange([3,4]))