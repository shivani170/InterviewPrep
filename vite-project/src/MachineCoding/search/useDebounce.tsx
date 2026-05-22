export const useDebounce = (func, delay) => {
    let timerId;
    const debounceFunction = (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay)

    }
    return debounceFunction
}