function mergeSArr(leftArr, rightArr) {
  let curr = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer][0] < rightArr[rightPointer][0]) {
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

  return mergeSArr(mergeSort(leftArr), mergeSort(rightArr));
}

var merge = function (intervals2) {
  let intervals = mergeSort(intervals2);
  console.log(intervals);
  var arr = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < arr[arr.length - 1][0]) {
      arr[arr.length - 1][0] = intervals[i][0];
    }
    if (
      intervals[i][0] <= arr[arr.length - 1][1] &&
      intervals[i][1] > arr[arr.length - 1][1]
    ) {
      arr[arr.length - 1][1] = intervals[i][1];
    } else if (
      intervals[i][0] > arr[arr.length - 1][1] &&
      intervals[i][1] > arr[arr.length - 1][1]
    ) {
      arr.push(intervals[i]);
    }
  }
  return arr;
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function reverse(arr, position) {
  let end = arr.length - 1;
  while (position < end) {
    swap(arr, position, end);
    position++, end--;
  }
  return arr;
}

function nextPermutation(arr) {
  let i = arr.length - 2;
  while (i >= 0 && arr[i + 1] <= arr[i]) {
    i--;
  }

  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
      j--;
    }

    swap(arr, i, j);
  }
  reverse(arr, i + 1);
  return arr;
}

// console.log(nextPermutation([1,5,8,4,7,6,5,3,1]))

function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // console.log(count++)
        count++;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(count);
  return arr;
}

let count = 0;
function merge2(leftArr, rightArr) {
  let leftPointer = 0;
  let rightPointer = 0;
  let curr = [];

  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    if (leftArr[leftPointer] < rightArr[rightPointer]) {
      curr.push(leftArr[leftPointer++]);
      console.log("Inc Count");
      count++;
    } else {
      curr.push(rightArr[rightPointer++]);
      count++;
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

function mergeSort2(arr) {
  if (arr.length < 2) return arr;

  let middle = arr.length / 2;
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < middle) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return merge2(mergeSort2(leftArr), mergeSort2(rightArr));
}

// console.log(mergeSort2([8, 4, 2, 1]))
// console.log(count)

var maxProfit = function (prices) {
  let maxCur = 0,
    maxSoFar = 0;
  for (let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]));
    console.log(maxCur);
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
};
//  console.log(maxProfit([7,1,5,3,6,4]))

function findPairs(arr, sum) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  console.log(map);
  for (let i = 0; i < arr.length; i++) {
    if (map.has(sum - arr[i])) {
      count += map.get(sum - arr[i]);
      if (sum - arr[i] == arr[i]) count--;
    }
  }
  return count / 2;
}

// console.log(findPairs([1, 1, 1, 1], 2));

function isPalindrome(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] != s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("abba"))

function findDuplicates(s) {
  // let map = new Map()
  // for (let i = 0; i < s.length; i++) {
  //   map.set(s[i],(map.get(s[i])||0)+1)
  // }
  // return map;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }
  return set;
}

// console.log(findDuplicates("geeksforgeeks"))

function findRotation(s1, s2) {
  let q1 = [];
  for (let i = 0; i < s1.length; i++) {
    q1.push(s1[i]);
  }
  let q2 = [];
  for (let i = 0; i < s2.length; i++) {
    q2.push(s2[i]);
  }

  let k = s2.length - 1;
  while (k--) {
    let temp = q1.shift();
    q1.push(temp);

    if (JSON.stringify(q1) === JSON.stringify(q2)) return true;
  }

  return false;
}

// console.log(findRotation("ABACD","DCABA"))

var countAndSay = function (n) {
  let str = "1";
  while (n > 1) {
    let newstr = "";
    let count = 0;
    let say = str[0];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === say) {
        count++;
      } else {
        newstr += count + say;
        say = str[i];
        count = 1;
      }
    }
    str = newstr + count + say;
    n -= 1;
  }
  return str;
};

// console.log(countAndSay(5))

function find(arr, n, x) {
  //code here
  let start = -1;
  let end = -1;
  // for(let i=0;i<n;i++){
  //     if(arr[i]===x){
  //         if(start===-1){start=i;}
  //         end=i;
  //     }
  // }
  // while()
  return { start, end };
}

// console.log(find([1, 3, 5, 5, 5, 5, 7, 123, 125],9,7))

function LongestRepeatingSubsequence(str) {
  for (let i = 0; i < str.length; i++) {
    let proceedToK = false;
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && j != i) {
        count = j;
        proceedToK = true;
        break;
      }
    }
    if (proceedToK) {
      for (let k = 0; k < str.length; k++) {
        if (str[i] === str[k] && k != i && k != count) {
          return count;
        }
      }
    }
  }
  return -1;
}

// console.log(LongestRepeatingSubsequence("axxzxy"));

function find_permutation(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        console.log(str);
      }
    }
  }
}

// console.log(find_permutation('ABSG'))

function find2(arr, n, x) {
  let upper = n-1;
  let lower = 0;
  let position = -1
  while (lower <= upper) {
    let middle = lower + Math.floor((upper - lower) / 2);

    if (arr[middle] === x) {
      // return middle;
      position = middle;
      lower = middle + 1;
    } else if (arr[middle] < x) {
      lower = middle + 1;
    } else {
      upper = middle - 1;
    }
  }
  return position;
}

// console.log(find2([1, 3, 5, 5, 5, 5, 5, 123, 125], 9, 5));

function valueEqualToIndex(arr,n){
  for (let i = 0; i < n; i++) {
    if(i+1===arr[i]){
      console.log(arr[i])
    }
  }
}

// valueEqualToIndex([15, 2, 45, 12, 7],5)
