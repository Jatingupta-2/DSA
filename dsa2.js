function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

// console.log(reverseArray([1,2,3,4,5,6]))

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function iterationSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(iterationSort([5,7,2,9,1,5,8]))

function merge(leftArray, rightArray) {
  let leftCounter = 0;
  let rightCounter = 0;
  let arr = [];

  while (leftCounter < leftArray.length && rightCounter < rightArray.length) {
    if (leftArray[leftCounter] < rightArray[rightCounter]) {
      arr.push(leftArray[leftCounter++]);
    } else {
      arr.push(rightArray[rightCounter++]);
    }
  }

  while (leftCounter < leftArray.length) {
    arr.push(leftArray[leftCounter++]);
  }
  while (rightCounter < rightArray.length) {
    arr.push(rightArray[rightCounter++]);
  }
  console.log("merging", arr);
  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middle = arr.length / 2;
  let leftArr = [];
  let rightArr = [];
  let i = 0;

  while (i < arr.length) {
    if (i < middle) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
    i++;
  }
  console.log("Recursion", leftArr, rightArr);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// console.log(mergeSort([5, 7, 2, 9, 1, 5, 8]));

function sort012(arr) {
  let lo = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid < high) {
    if (arr[mid] === 0) {
      let temp = arr[lo];
      arr[lo] = arr[mid];
      arr[mid] = temp;

      mid++;
      lo++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;

      high--;
    }
  }
  return arr;
}

// console.log(sort012([0, 2, 1, 0, 2, 2, 1, 1, 0, 0]));

function moveNegative(arr) {
  let lo = 0;
  let current = 0;
  while (current < arr.length) {
    if (arr[current] < 0) {
      let temp = arr[lo];
      arr[lo] = arr[current];
      arr[current] = temp;
      lo++;
      current++;
    } else {
      current++;
    }
  }
  return arr;
}

// console.log(moveNegative([1, 5, -2, 9,0, -1, -8]))

function findInUnionArr(arr1, arr2) {
  let sortedArr1 = mergeSort(arr1);
  let sortedArr2 = mergeSort(arr2);

  let pointerArr1 = 0;
  let pointerArr2 = 0;

  let unionArr = [];

  while (pointerArr1 < arr1.length && pointerArr2 < arr2.length) {
    if (sortedArr1[pointerArr1] < sortedArr2[pointerArr2]) {
      unionArr.push(sortedArr1[pointerArr1++]);
    } else if (sortedArr1[pointerArr1] > sortedArr2[pointerArr2]) {
      unionArr.push(sortedArr2[pointerArr2++]);
    } else {
      unionArr.push(sortedArr1[pointerArr1++]);
      pointerArr2++;
    }
  }
  while (pointerArr1 < arr1.length) {
    unionArr.push(sortedArr1[pointerArr1++]);
  }
  while (pointerArr2 < arr2.length) {
    unionArr.push(sortedArr2[pointerArr2++]);
  }

  return unionArr;
}

// console.log(findInUnionArr([5, 4, 2, 1, 3], [1, 6, 7, 2, 3]));

function maximumSumSubArray(arr) {
  let current = 0;
  let highest = 0;

  for (let i = 0; i < arr.length; i++) {
    current = Math.max(0, current + arr[i]);
    highest = Math.max(current, highest);
  }

  return highest;
}

// console.log(maximumSumSubArray([22,-5,9,2,3,-7,-6,-21]))

function findPairWithDifference(arr, diff) {
  let lo = 0;
  //   let hi = arr.length - 1;
  let current = 0;

  while (current < arr.length) {
    if (Math.abs(arr[current] - arr[lo]) < diff) {
      current++;
    } else if (Math.abs(arr[current] - arr[lo]) > diff) {
      lo++;
    } else {
      console.log(lo, current);
      lo++;
      current++;
    }
  }
}

// findPairWithDifference([1, 2, 3, 5, 7, 9], 2);

function binarySearch1st(arr, num) {
  let lo = 0;
  let hi = arr.length - 1;
  let occurence1 = -1;

  while (hi >= lo) {
   
    let middle = lo + Math.floor((hi-lo) / 2);
  
    if(arr[middle]===num){
      // return middle;
      occurence1 = middle
      // console.log(middle)
      hi = middle - 1;
      // lo = middle+1;
    }
    else if (arr[middle] > num) {
      hi = middle - 1;
    } else{
      lo = middle + 1;
    }
  }
  return occurence1;
}

function binarySearchLast(arr, num) {
  let lo = 0;
  let hi = arr.length - 1;
  let occurence1 = -1;

  while (hi >= lo) {
   
    let middle = lo + Math.floor((hi-lo) / 2);
  
    if(arr[middle]===num){
      // return middle;
      occurence1 = middle
      // console.log(middle)
      // hi = middle - 1;
      lo = middle+1;
    }
    else if (arr[middle] > num) {
      hi = middle - 1;
    } else{
      lo = middle + 1;
    }
  }
  return occurence1;
}

function countOccurence(arr, num){
  let el1 = binarySearch1st(arr, num)
  let el2 = binarySearchLast(arr, num)
  return(el2-el1 + 1)
}

// console.log(countOccurence([1, 2, 4, 7, 7, 7, 11], 7));



// binarySearch([1, 2, 7, 7, 7, 9, 11], 7)

function findRotation(arr){
  // for(let i=0;i<arr.length-1;i++){
  //   if(arr[i+1] < arr[i]){
  //     return arr.length - i -1;
  //   }
  // }

  let lo=0;
  let hi=arr.length-1

  while(lo<=hi){
    let middle = lo+ Math.floor((hi-lo)/2)
    if(arr[middle]<arr[middle-1] && arr[middle]<arr[middle+1]){
      console.log(arr[middle])
      return arr.length - middle;
    }
    else if(arr[middle]<arr[hi]){
        hi = middle-1
    }
    else {
      lo = middle+1
    }
  }
  return -1;

}


// console.log(findRotation([11,12,13,14,15,2,3,4]))

function findInCSA(arr,num){
  let lo = 0;
  let hi = arr.length-1
  while(lo<=hi){
    let mid = (lo+hi)/2
    if(arr[mid]===num) return mid;
    if(arr[mid]<arr[hi]){
      if(num>arr[mid] && num<=arr[hi]){
        lo= mid+1
      }
      else{
        hi= mid-1
      }
    }
    else{
      if(num>=arr[lo] && num<arr[mid]){
        hi= mid-1
      }
      else{
        lo =mid+1;
      }
    }
  }
  return -1;
}

console.log(findInCSA([11,12,13,14,15,2,3,4],2))

//Exactly 1 element is repeatedin an array . find it eg [1,2,3,4,1]

//sort and if next element is equal to current return it

//if the last element eg we have a array of n natural numbers eg[1,2,3,4,5,6] and now we add 1 extra element at the last [1,2,3,4,5,6,4], we need to find the occuernce of the last element 

// sum of n natural numbers is (n*n+1)/2

//so we will do 1-6 i.e 6*7/2 = 21 and find the total sum of the array i.e 1+2+3+4+5+6+4 i.e 25 and now do 25-21 and we will get the last number