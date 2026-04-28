var arr = [1, 2, 3, 4, 1, 6, 7, 8, 9]
const printArrayElement = () => {
let i = 0
while(i < arr.length){
arr[i]
let j = i + 1
while (j < arr.length) {
	if(arr[j] === arr[i]) {
		return true
	}
	 j++
    }
i++
return false
}

}

console.log(printArrayElement())
