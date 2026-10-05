function memoize(func) {
  let cache = new Map();
  return function (...arg) {
    let key = JSON.stringify(arg);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, arg);

    cache.set(key, result);
    return result;
  };
}

function square(arg) {
  console.log("Calculating...");
  return arg * arg;
}

const memoizedValue = memoize(square);

console.log(memoizedValue(5))
