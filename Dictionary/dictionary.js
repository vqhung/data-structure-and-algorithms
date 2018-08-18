const {defaultToString} = require('./defaultToString');
const ValuePair = require('./ValuePair');

class Dictionary {
  constructor(toStrFn = defaultToString){
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key){
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value){
    if (key !== null && value !== null){
      const tableKey = toStrFn(key);
      this.table[tableKey] = new ValuePair(key,value);
      return true;
    }
    return false;
  }

  get(key){
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value;
  }

  remove(key){
    if (this.hasKey(key)){
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  keyValues(){
    const valuePairs = [];
    for (const k in this.table){
      if (this.hasKey(k)){
        valuePair = this.table[k];
      }
    }
    return valuePairs;
  }

  keys(){
    this.keyValues().map(valuePair => valuePair.key);
  }
}
