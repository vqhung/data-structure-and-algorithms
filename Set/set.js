class Set {
  constructor(){
    this.items = {};
  }

  size(){
    return Object.keys(this.items).length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  has(record){
    return Object.prototype.hasOwnProperty.call(this.items, record)
  }

  add(record){
    if(!has(record)){
      this.items[record] = record;
      return true;
    }
    return false;
  }

  delete(record){
    if(!has(record)){
      delete this.items[record];
      return true;
    }
    return false;
  }

  values(){
    return Object.values(this.items);
  }

  union(otherSet){
    const unionSet = new Set();
    this.values().forEach((value)=>{
      unionSet.add(value)
    });
    otherSet.values().forEach((value)=>{
      unionSet.add(value);
    });
    return unionSet;

  }

  intersection(otherSet){
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0){
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)){
        intersectionSet.add(value);
      }
    });

    return intersectionSet;

  }

  difference(otherSet){
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if(!otherSet.values().includes(value)){
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet){
    if (this.size() - otherSet.size() > 0){
      return false;
    }
    let isSubset = true;
    this.values().every((value)=>{
      if(!otherSet.values().includes(value)){
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }

}

module.exports = Set;
