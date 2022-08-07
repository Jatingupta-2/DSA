


var merge2222 = function(nums1, m, nums2, n) {
    let ptr1 = 0
    let ptr2 = 0;
    let arr = []
    while(ptr1<m && ptr2 < n){
        if(nums1[ptr1] < nums2[ptr2]){
            arr.push(nums1[ptr1++])
        }
        else{
            arr.push(nums2[ptr2++])
        }
    }
    while(ptr1<m){
        arr.push(nums1[ptr1++])
    }
    while(ptr2<n){
        arr.push(nums2[ptr2++])
    }
    
    return arr;
    
};

// console.log(merge2222([1,2,3,0,0,0],
//     3,
//     [2,5,6],
//     3))

var calPoints = function(ops) {
    let response = []
    for(let i=0;i<ops.length;i++){
        if(ops[i]==='C'){
            response.pop()
        }
        else  if(ops[i]==='D'){
            response.push(+response[response.length-1]*2)
        }
        else  if(ops[i]==='+'){
            response.push(+response[response.length-1] + +response[response.length-2])
        }
        else{
            response.push(ops[i])
        }
    }

    let sum = 0;
    for(let i=0;i<response.length;i++){
        sum += +response[i]
    }
    
    return sum;
};

// console.log(calPoints(["5","2","C","D","+"]))


function threeSumClosest(nums, target) {
    let cS = nums[0] + nums[1] + nums[2];
    nums.sort((x, y) => x - y);
    console.log(nums)
    for(let i=0;i<nums.length-1;i++){
        let j= i+1;
        let k = nums.length-1
        
        while(j<k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum === target) return sum;
            if(Math.abs(sum-target) < Math.abs(cS - target)){
                cS = sum;
            }
            if(sum > target){
                k--;
                
            }
            else{
                j++;
            }
        }
    }
    return cS;
};

// console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5],-2))


var searchRange = function(nums, target) {
    let upper = nums.length-1;
    let lower = 0;
    
    let lowerLimit = -1
    let upperLimit = -1
    
    while(lower<=upper){
        let middle = Math.floor((lower+upper)/2);
    
        if(nums[middle] === target){
            lowerLimit = middle
            upper = middle - 1;
        }
        else if(nums[middle]>target){
            upper = middle - 1;
        }
        else{
            lower = middle + 1;
        }
    }
    upper = nums.length-1;
    lower = 0;
    while(lower<=upper){
        let middle = Math.floor((lower+upper)/2);
        
        
        if(nums[middle] === target){
            upperLimit = middle
            lower = middle + 1;
        }
        else if(nums[middle]>target){
            upper = middle - 1;
        }
        else{
            lower = middle + 1;
        }
    }
    
    return [lowerLimit, upperLimit]
};

console.log(searchRange([5,7,7,8,8,10],8))