function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function heavyTask(value) {
  console.log("Running Heavy Task: ", value);
}

const debouncedHeavyTask = debounce(heavyTask, 3000);

// debouncedHeavyTask(1)
// debouncedHeavyTask(2)
// debouncedHeavyTask(3)

debouncedHeavyTask("hello");
