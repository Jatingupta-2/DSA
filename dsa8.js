function maxSum(arr) {
    let curr = 0;
    let sum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        curr = Math.max(arr[i], arr[i] + curr);
        sum = Math.max(sum, curr)
    }

    return sum;
}

// console.log(maxSum([-7,-4,-2,-1,-5]))


function maxProfit(arr) {
    let min = arr[0];
    let maxProfit = 0;
    for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        let profit = arr[i] - min;
        maxProfit = Math.max(profit, maxProfit);
    }

    return maxProfit;

}
// console.log(maxProfit([7,1,5,3,6,4]))

function containsDuplicate(arr) {

    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }

    return arr.length != set.size
}

// console.log(containsDuplicate([1,2,3,1]))

function pES(arr) {

    let leftProduct = 1;
    let rightProduct = 1;
    let resultArray = []
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(leftProduct)
        leftProduct *= arr[i]
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        resultArray[i] *= rightProduct
        rightProduct *= arr[i]
    }

    return resultArray;
}

// console.log(pES([1,2,3,4]))

function maxProduct(arr) {

    let currMin = 1;
    let currMax = 1;
    let maxProduct = 1;

    for (let i = 0; i < arr.length; i++) {
        let temp = currMax;
        currMax = Math.max(arr[i], temp * arr[i], currMin * arr[i])
        currMin = Math.min(arr[i], temp * arr[i], currMin * arr[i])
        maxProduct = Math.max(currMax, maxProduct);
    }

    return maxProduct;

}

// console.log(maxProduct([2,3,-2,1,-6,-5]))

function searchInRot(nums, target) {

    let lower = 0;
    let upper = nums.length - 1;

    while (lower <= upper) {
        middle = Math.floor((upper + lower) / 2)

        if (nums[middle] === target) return middle;
        else if (nums[middle] > nums[upper]) {
            if (target < nums[middle] && target <= nums[upper]) {
                lower = middle + 1;
            }
            else {
                upper = middle - 1
            }
        }
        else {
            if (target < nums[middle] && target >= nums[lower]) {
                upper = middle - 1

            }
            else {
                lower = middle + 1;
            }
        }
    }

    return -1;

}

// console.log(searchInRot([4,5,6,7,0,1,2],0))


function fib(end) {
    if (end === 2) {
        return 1;
    }
    if (end === 1) {
        return 0;
    }

    return fib(end - 1) + fib(end - 2)
}

function findSum(start, arr) {
    let sum = 0;
    if (start < arr.length) {
        return arr[start] + findSum(start + 1, arr)
    }
    return 0;
}

// console.log(findSum(0, [1, 2, 3, 4, 5,6]))

// console.log(fib(8))

function search(arr, target){

    let lower = 0;
    let upper = arr.length -1;
    while(lower <= upper){
        let middle = Math.floor((lower+upper)/2);
        console.log(middle)
        if(arr[middle] === target){
            return middle;
        }
        else if(arr[middle] < arr[upper]){
            
            if(target > arr[middle] && target <= arr[upper]){
                lower = middle + 1;
            }
            else{
                upper = middle - 1;
            }
        }
        else{
            if(target<arr[middle] && target >= arr[lower]){
                upper = middle - 1;
            }
            else{
                lower = middle + 1;
            }
        }
    }

}

// console.log(search([5,1,3],5))

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }


    return arr;
}

function merge(arr1,arr2){

    let ptr1 = 0;
    let ptr2 = 0;

    let mergeArr = [];

    while(ptr1<arr1.length && ptr2<arr2.length){
        if(arr1[ptr1]  < arr2[ptr2]){
            mergeArr.push(arr1[ptr1++])
        }
        else{
            mergeArr.push(arr2[ptr2++])
        }
    }

    while(ptr1<arr1.length){
        mergeArr.push(arr1[ptr1++])
    }

    while(ptr2<arr2.length){
        mergeArr.push(arr2[ptr2++]) 
    }

    return mergeArr;

}

function mergeSort(arr){

    if(arr.length<=1) return arr;

    let middle = arr.length/2;

    let leftArr = [];
    let rightArr = [];

    for(let i=0;i<arr.length;i++){
        if(i<middle){
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i])
        }
    }

   return merge(mergeSort(leftArr),mergeSort(rightArr));

}

// console.log(mergeSort([7,3,1,9,2]))

function sum3(arr){
    let sortedArr = mergeSort(arr);
    
    let set = new Set();

    for(let i=0;i<sortedArr.length;i++){
        let j = i+1;
        let k = sortedArr.length-1;
        while(j<k){
            let sumTemp = sortedArr[i] + sortedArr[j] + sortedArr[k]
            if(sumTemp === 0){
                let newSetVal = sortedArr[i]+' '+sortedArr[j]+' '+sortedArr[k]
                set.add(newSetVal);
                j++;
                k--;
            }
            else if(sumTemp>0){
                k--
            }
            else{
                j++;
            }
        }
    }

    return set;
}

// console.log(sum3([-1,0,1,2,-1,-4]))

