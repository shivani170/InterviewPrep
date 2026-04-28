//Given an array arr[], the task is to print every alternate element of the array starting from the first element.

const printAlternative = (arr) => {
    for( let i = 0; i < arr.length; i+2){
        console.log(arr[i])
    }

}

printAlternative([10, 20, 30, 40, 50])