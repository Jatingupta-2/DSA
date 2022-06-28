function reverserArray(arr) {
  // swap elements-------------------
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

// console.log(reverserArray([1, 2, 3, 4, 5, 6,7]));

//MIN MAX

// const arr = [5,7,2,9,1,5,8]

// let min = arr[0];
// let max = arr[0];

// for(let i=1;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }

//O(n) time and O(1)space

// console.log(min,max)

//sorting in JS

// BUBBLE SORT

// let arr = [5, 7, 2, 9, 1, 4, 8, 5];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j + 1] < arr[j]) {
//       [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//     }
//   }
// }
//REFER DSA2 for better soln
//INSERTION SORT
// const arr = [5, 7, 2, 9, 1, 4, 8, 5];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i - 1; j >= 0; j--) {
//     if (arr[j + 1] < arr[j]) {
//       [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//     }
//   }
// }
// console.log(arr);

//MERGE SORT
// const arr = [5, 7, 2];

// function merge(list1, list2) {
//     let arr=[]
//     console.log("List before merge")
//     console.log(list1,list2)
//     console.log("List before merge End")
//   while (list1.length && list2.length) {
//     if(list1[0] < list2[0]){
//         arr.push(list1.shift())
//     }
//     else{
//         arr.push(list2.shift())
//     }
//   }
//   console.log("List after merge")
//   console.log(arr ,list1,list2)
//   console.log([...arr, ...list1, ...list2])
//   console.log("List after merge End")
//   return [...arr, ...list1, ...list2]
// }

// function mergeSort(arr) {
//   if (arr.length < 2) return arr;

//   let middle = arr.length / 2;
//   const leftArray = arr.splice(0, middle);

//   console.log("Breaking Arrays")
//   console.log(leftArray,arr)
//   console.log("Breaking Arrays End")
//   return merge(mergeSort(leftArray), mergeSort(arr));
// }

// console.log(mergeSort(arr));

// move negative elements to one side

// let arr = [1, 5, -2, 9, -1, -8];

// function moveToLeft(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j + 1] < 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// console.log(moveToLeft(arr));

//MERGE SORT W/O Shift
function merge(list1, list2) {
  let arr = [];
  let left_i = 0;
  let right_i = 0;
  console.log("before", arr, list1, list2);
  while (left_i < list1.length && right_i < list2.length) {
    if (list1[left_i] < list2[right_i]) {
      arr.push(list1[left_i++]);
    } else {
      arr.push(list2[right_i++]);
    }
  }

  while (left_i < list1.length) {
    arr.push(list1[left_i++]);
  }

  while (right_i < list2.length) {
    arr.push(list2[right_i++]);
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let middle = arr.length / 2;

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < middle) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// console.log(mergeSort([9, 7, 2, 1, 5])); //2, 9, 1, 4, 8, 5

//Conventional Method
function sort012(arr) {
  let arr0 = [];
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) arr0.push(arr[i]);
    else if (arr[i] === 1) arr1.push(arr[i]);
    else if (arr[i] === 2) arr2.push(arr[i]);
  }

  return [...arr0, ...arr1, ...arr2];
}

function sort012new(arr) {
  let lo = 0;
  let mid = 0;
  let hi = arr.length - 1;
  let temp = 0;

  while (mid <= hi) {
    if (arr[mid] === 0) {
      let temp = arr[lo];
      arr[lo] = arr[mid];
      arr[mid] = temp;
      mid++;
      lo++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[hi];
      arr[hi] = arr[mid];
      arr[mid] = temp;
      hi--;
    }
  }
  return arr;
}
// console.log(sort012new([0, 2, 1, 0, 2, 2, 1, 1, 0, 0]));

//merge sort
function moveNegative(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function moveNegativeNew(arr) {
  let lo = 0;
  let mid = 0;
  let temp = 0;

  while (mid < arr.length) {
    if (arr[mid] < 0) {
      temp = arr[lo];
      arr[lo] = arr[mid];
      arr[mid] = temp;
      lo++;
      mid++;
    } else {
      mid++;
    }
  }
  return arr;
}

// console.log(moveNegativeNew([1, 5, -2, 9, -1, -8]))

function findInUnionArr(unionArr, number) {
  for (let j = 0; j < unionArr.length; j++) {
    if (unionArr[j] === number) return true;
  }
  return false;
}

function findUnion(arr1, arr2) {
  let unionArr = [];
  let arrTobeMatched = [];

  if (arr1.length < arr2.length) {
    unionArr = arr2;
    arrTobeMatched = arr1;
  } else {
    unionArr = arr1;
    arrTobeMatched = arr2;
  }

  for (let i = 0; i < arrTobeMatched.length; i++) {
    if (!findInUnionArr(unionArr, arrTobeMatched[i])) {
      unionArr.push(arrTobeMatched[i]);
    }
  }
  return unionArr;
}

function findUnionNew(arr1, arr2) {
  let list1 = mergeSort(arr1);
  let list2 = mergeSort(arr2);

  let pointer_list1 = 0;
  let pointer_list2 = 0;
  console.log(list1);
  console.log(list2);
  let unionArr = [];
  while (pointer_list1 < list1.length && pointer_list2 < list2.length) {
    if (list1[pointer_list1] < list2[pointer_list2]) {
      unionArr.push(list1[pointer_list1++]);
    } else if (list1[pointer_list1] > list2[pointer_list2]) {
      unionArr.push(list2[pointer_list2++]);
    } else {
      unionArr.push(list2[pointer_list2++]);
      pointer_list1++;
    }
  }
  while (pointer_list1 < list1.length) {
    unionArr.push(list1[pointer_list1++]);
  }
  while (pointer_list2 < list2.length) {
    unionArr.push(list2[pointer_list2++]);
  }
  return unionArr;
}

//sort and compare with 2 pointers i and j in while loop
// console.log(findUnionNew([5, 4, 2, 1, 3], [1, 6, 7, 2, 3]));

//DOUBT
function rotateArray() {
  // Approach 1
  let tempVar = rotateArr.shift();
  rotateArr.push(tempVar);

  return rotateArr;

  //Approach 2
  // for(let i=0;i<rotateArr.length;i++){
  //UNCLEAR
  // }
}

let rotateArr = [1, 2, 3, 4, 5, 6];
// console.log(rotateArray());
// console.log(rotateArray());
// console.log(rotateArr);

function anagram(str1, str2) {
  if (str1.length != str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[str2.length - 1 - i]) return false;
  }

  return true;
}

// console.log(anagram("abc","cba"))

function maximumSumSubArray(arr) {
  let current = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    sum = Math.max(current, sum);
  }
  return sum;
}

// console.log(maximumSumSubArray([22,-5,9,2,3,-7,-6,-21]))

function findPairWithDifference(arr, diff) {
  let a = mergeSort(arr);
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    if (Math.abs(arr[lo] - arr[hi]) < diff) {
      console.log("Low", arr[lo], arr[hi]);
      lo++;
    } else if (Math.abs(arr[lo] - arr[hi]) > diff) {
      console.log("high", arr[lo], arr[hi]);
      hi--;
    } else if (Math.abs(arr[lo] - arr[hi]) === diff) {
      return 1;
    }
  }
  return 0;
}

// console.log(findPairWithDifference([5, 10, 3, 2, 50, 80],76))

function maxProfit(arr) {
  let lo = 0;
  let hi = arr.length - 1;
  let buyPrice = 0;
  let sellPrice = 0;
  let difference = 0;
  while (lo < hi) {
    if (arr[hi] - arr[lo] > difference) {
      // console.log(lo, hi);
      buyPrice = arr[lo];
      sellPrice = arr[hi];
      difference = arr[hi] - arr[lo];
      hi--;
    } else if (arr[hi] - arr[lo] < difference) {
      // console.log("2", lo, hi);
      lo++;
    }
  }
  return { buyPrice, sellPrice, difference };
}

// console.log(maxProfit([7,1,5,3,6,4]));

function spiralOrderMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {}
  }
}

function test() {
  // let a=10;
  // var a=100;
  var bac = 100;

  // console.log(a)
  if (2 === 2) {
    let a = 10;
  }

  // console.log(a)
}

// test()
// console.log(bac)

function nearestsum(arr, target) {
  let sortedArray = mergeSort(arr);
  
  let nearestSum2 = arr[0]+arr[1]+arr[2];

  for (let i = 0; i < sortedArray.length; i++) {
    let ptr1 = i + 1;
    let ptr2 = sortedArray.length - 1;
    while (ptr1 < ptr2) {
      let sum = arr[i] + sortedArray[ptr1] + sortedArray[ptr2];

      if (Math.abs(target - sum) < Math.abs(target - nearestSum2)) {
        
        
        nearestSum2 = sum;
      }

      if (sum > target) {
        ptr2--;
      } else {
        ptr1++;
      }
    }
  }

  return nearestSum2;
}

console.log(nearestsum([-5, -1, 2, 1, -4, 1], 1));
