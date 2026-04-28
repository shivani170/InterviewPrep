// arr = [ -2, 1, 3, 4, -1, 2, 1, -5, 4 ]


// [-2]          => sI = 0, eI = 0
// [-2,1]        => sI = 0, eI = 1
// [-2,1,3]			=> sI = 0, eI = 2
// [-2,1,3,4]    => sI = 0, eI = 3
// [-2,1,3,4,-1] => sI = 0, eI = 4

// ... n-1(th)   => sI = 0, eI = n-1

// [1]						=> sI = 1, eI = 1
// [1,3]         => sI = 1, eI = 2
// [1,3,4]       => sI = 1, eI = 3
// [1,3,4,-1]    => sI = 1, eI = 4
// [1,3,4,-1,2]  => sI = 1, eI = 5
// ...n-1(th)    => sI = 1, eI = n-1


// [3] ===> sI =2, eI = 2

// In brute Force approach
// 1. print all subset
// 2. subArraySum
// 3. maxArraySum

const getMaximumSubarray = () => {
	max = -999999

	for(let si=0; si < n; si++){
    let sum = 0
   
    for(let eI=sI; eI < n; eI++){//0,1,2,3,4  
      sI=0, eI= 3
      let subArr = ''
      for(let i = sI; i <= eI; i++){ eI = -2
        subArr = subArr + arr[i] // sub = -2 1 3 4
      }
      console.log(subArr)
        sum = sum + arr[eI]
        if(sum > max){
        	max = sum, //max=4
          	console.log(sum)  // 0 + -2 = -2 + 1 = -1 + 3 = 2 + 4 = 6, 
        } 
    }
    
  
  }
}
getMaximumSubarray(arr)
-2
-1