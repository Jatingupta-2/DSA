function sort012Arr(arr) {
  let hi = arr.length - 1;
  let lo = 0;
  let middle = 0;

  while (middle < hi) {
    if (arr[middle] === 0) {
      let temp = arr[lo];
      arr[lo] = arr[middle];
      arr[middle] = temp;
      lo++;
      middle++;
    } else if (arr[middle] === 1) {
      middle += 1;
    } else {
      let temp = arr[hi];
      arr[hi] = arr[middle];
      arr[middle] = temp;
      hi -= 1;
    }
  }

  return arr;
}

// console.log(sort012Arr([2,2,1,0,1,0,1,0,0,2]));

function moveNegative(arr) {
  let lo = 0;
  let mid = 0;

  while (mid < arr.length) {
    if (arr[mid] < 0) {
      let temp = arr[lo];
      arr[lo] = arr[mid];
      arr[mid] = temp;
      lo++;
    }

    mid++;
  }
  return arr;
}

// console.log(moveNegative([-12, 11, -13, -5,6, -7, 5, -3, 11]));

function merge(leftArr, rightArr) {
  let curr = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer] < rightArr[rightPointer]) {
      curr.push(leftArr[leftPointer++]);
    } else {
      curr.push(rightArr[rightPointer++]);
    }
  }
  while (leftPointer < leftArr.length) {
    curr.push(leftArr[leftPointer++]);
  }
  while (rightPointer < rightArr.length) {
    curr.push(rightArr[rightPointer++]);
  }

  return curr;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < middle) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function findInUnionArr(arr1, arr2) {
  let sortedArr1 = mergeSort(arr1)
  let sortedArr2 = mergeSort(arr2)
 
  let pointer1 = 0;
  let pointer2 = 0;
  let curr = [];

  while(pointer1<sortedArr1.length && pointer2<sortedArr2.length){
    if(sortedArr1[pointer1]===sortedArr2[pointer2]){
        curr.push(sortedArr1[pointer1++])
        pointer2++;
    }
    else if(sortedArr1[pointer1]<sortedArr2[pointer2]){
        curr.push(sortedArr1[pointer1++])
    }
    else{
        curr.push(sortedArr2[pointer2++])
    }
  }
  while(pointer1<sortedArr1.length){
    curr.push(sortedArr1[pointer1++])
  }
  while(pointer2<sortedArr2.length){
    curr.push(sortedArr2[pointer2++])
  }
  return curr;
}

// console.log(findInUnionArr([3, 7, 1, 2 ],[3,1,4,6]));

// let arr1 =[1,2,3,4]
// function rotateArr(){
//     let temp = arr1.pop();
//     arr1.unshift(temp)
// }

// rotateArr();
// rotateArr();

function largestSum(arr){
    let curr= 0;
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        
        curr = Math.max(arr[i],curr+arr[i])//marks the starting point of slidig window
        sum = Math.max(sum, curr);//marks the ending point of sliding window
    }
    return sum;
}

console.log(largestSum([1,2,-9,3,-2,5]))

