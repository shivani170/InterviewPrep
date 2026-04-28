// 🔥 1. Stale State in setTimeout
// ❓ What happens?
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log(count);
    }, 1000);
  };

  return <button onClick={handleClick}>Click</button>;
}
// 🤯 Problem

// Click → increment state → but timeout logs old value

// 💡 Why

// Closure captured count at click time. Not updated later.

// ✅ Fix (useRef for latest value)
const countRef = useRef(count);

useEffect(() => {
  countRef.current = count;
}, [count]);

setTimeout(() => {
  console.log(countRef.current);
}, 1000);
// ⚡ 2. Stale State in useEffect
// ❓ Buggy code
useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(id);
}, []);
// 🤯 Problem

// Always logs initial count (0)

// 💡 Fix 1 (add dependency)
useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(id);
}, [count]);
// 💡 Fix 2 (better: functional update)
setCount(prev => prev + 1);
// 🧩 3. Event Handlers Inside Loops
// ❓ Problem
{items.map((item, i) => (
  <button onClick={() => handleClick(i)}>
    Click
  </button>
))}

// Looks fine… until handleClick uses stale state inside.

// 💡 Fix

// Use functional updates:

setItems(prev => {
  // safe update using latest state
});
// ⏳ 4. Async API + Stale Closure
// ❓ Buggy
const fetchData = async () => {
  const res = await fetch("/api");
  setData([...data, res]);
};
// 🤯 Problem

// If multiple calls happen → data may be outdated

// ✅ Fix
setData(prev => [...prev, res]);

// 👉 Always trust prev, not closure memory

// 🔁 5. useCallback with Missing Dependencies
// ❓ Buggy
const memoFn = useCallback(() => {
  console.log(count);
}, []);
// 🤯 Problem

// count is frozen at initial value

// ✅ Fix
const memoFnc = useCallback(() => {
  console.log(count);
}, [count]);


// 🧠 6. Custom Hook Trap
// ❓ Buggy hook
function useTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);
}
// 🤯 Problem

// count always stays 1

// ✅ Fix
// setCount(prev => prev + 1);
// 🎯 Interview One-Liner

// “React closure bugs usually come from stale state captured in hooks or async callbacks. The fix is to use dependency arrays correctly or rely on functional updates to always access the latest state.”

// 🧩 Mental Model

// React renders = snapshots 📸
// Closures = storing that snapshot

// If you don’t update dependencies, you’re literally working with an old photo while reality has moved on.