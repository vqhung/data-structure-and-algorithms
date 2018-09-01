function diffArraysA(arr1, arr2){
    let newArr = [];
    
    newArr = arr1.filter(function(item){
        return arr2.includes(item) === false;
    })
    
    newArr.push(...arr2.filter(function(item){
        return arr1.includes(item) === false;
    }))
    
    return newArr;
}

function diffArraysB(arr1, arr2){
    let newArr = [];
    
    newArr = arr1.filter(function(item){
        return arr2.includes(item) === false;
    });
    
    return newArr.concat(arr2.filter(function(item){
        return arr1.includes(item) === false;
    }));

}

function diffArraysC(arr1, arr2){
    
    let newArr = arr1.concat(arr2);
    return newArr.filter(function (item){
        return !arr1.includes(item) || !arr2.includes(item);
    })
    
    
    
}

console.log(diffArraysC([1,2,4],[4,5,6]));