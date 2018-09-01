function searchInCollection(collection, source) {
    const keys = Object.keys(source);
    
    return collection.filter(function(obj){
        for (let i = 0; i < keys.length; i++){
            if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]){
                return false;
            }
        }
        return true;
        })
}

console.log(searchInCollection([{name: 'Huy', age: 9}, {name: 'Diep', age: 6}, {name: 'Lan', age: 3}], {age: 3}));