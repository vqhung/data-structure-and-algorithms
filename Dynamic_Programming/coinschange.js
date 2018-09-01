function minCoinChange(coins, amount) {
  const cache = [];

  const makeChange = (value) => {
    if (!value) {
      return [];
    }
    if (cache[value]) {
      return cache[value];
    }
    let min = [];
    let newMin;
    let newAmount;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
        console.log('coin ' + coins[i])
      newAmount = value - coin;
        console.log('newAmount ' + newAmount);
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
          console.log('newMin returned ' + newMin)
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
          console.log('newMin.length '+ newMin.length);
          console.log('min.length-1 ' + (min.length - 1) );
          console.log('!min.length ' + !min.length);
          console.log('!newAmount ' + !newAmount);
        min = [coin].concat(newMin);
          console.log('min array ' + min);
         console.log('new Min ' + min + ' for ' + amount);
      }
    }
      console.log('cache['+value+']');
      console.log('min ' + min)
    return (cache[value] = min);
  };
  return makeChange(amount);
}

console.log(minCoinChange([1,3,4], 36))