function throttle(func, delay) {
  let now = new Date().getTime();
  let previous = 0;
  return function (...args) {
    previous = now;
    if (now - previous + delay) {
      setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  };
}

function onScroll() {
  console.log("Scrolled");
}

const throttledOnScroll = throttle(onScroll, 1000);

throttledOnScroll();
