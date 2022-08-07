var twoSum = function (nums, target) {

    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        else {
            map.set(nums[i], i)
        }
    }

};

// console.log(twoSum([2,7,11,15],9))

var maxProduct = function (nums) {
    let sum = 0;

    let currMin = 1
    let currMax = 1
    for (let i = 0; i < nums.length; i++) {
        let tempMax = currMax
        currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i])
        currMin = Math.min(nums[i], tempMax * nums[i], currMin * nums[i])
        sum = Math.max(currMax, sum)
        console.log(currMax, currMin, sum);
    }

    return sum;
};

// console.log(maxProduct([2,3,-2,4]))


var findMin = function (nums) {
    let lower = 0;
    let upper = nums.length - 1;
    let min = nums[0]

    if (nums.length < 2) return nums[0];

    while (upper >= lower) {

        let middle = Math.floor((lower + upper) / 2)

        if (nums[middle] > nums[middle + 1]) {
            return nums[middle + 1];
        }
        else if (nums[middle] < nums[middle - 1]) {
            return nums[middle];
        }
        else {
            if (middle <= upper) {
                lower = middle + 1;

            }
            else {
                upper = middle - 1;
            }
        }

    }

};

// console.log(findMin([11,13,5,17]));


var search = function (nums, target) {

    let lo = 0;
    let hi = nums.length - 1;

    while (hi >= lo) {
        let middle = Math.floor((lo + hi) / 2);

        if (nums[middle] === target) {
            return middle;
        }
        else if (nums[middle] < nums[hi]) {
            if (target > nums[middle] && target <= nums[hi]) {
                lo = middle + 1
            }
            else {
                hi = middle - 1
            }
        }
        else {
            if (target >= nums[lo] && target < nums[middle]) {
                hi = middle - 1;
            }
            else {
                lo = middle + 1;
            }
        }
    }


};

// console.log(search([4,5,6,7,0,1,2],1));

function findInCSA(arr, num) {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        let middle = Math.floor((lo + hi) / 2)
        // console.log(middle,arr[middle])
        if (arr[middle] === num) {
            return middle;
        }
        if (arr[middle] < arr[hi]) {
            if (num > arr[middle] && num <= arr[hi]) {
                lo = middle + 1
            }
            else {
                hi = middle - 1
            }
        }
        else {

            if (num >= arr[lo] && num < arr[middle]) {
                hi = middle - 1
            }
            else {
                lo = middle + 1
            }


        }
    }

    return -1;
}

// console.log(findInCSA([11,12,13,14,15,2,3,4],3))


var threeSum = function (nums) {

    let res = []
    let set = new Set();
    if (nums.length == 0) return res;
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum == 0) {
                let s = nums[i] + ',' + nums[j] + ',' + nums[k]
                console.log(s);
                if (!set.has(s)) {

                    res.push([nums[i], nums[j], nums[k]])
                }
                set.add(s);
                j++;
                k--;
            }
            else if (sum < 0) k--;
            else if (sum > 0) j++


        }

    }
    return res;

};

// console.log(threeSum([3,0,-2,-1,1,2]));

// function lengthOfLongestSubstring (s) {
//     var tmp = {},
//         currentMaxRange = 0,
//         lastRepIndex = 0,
//         len = s.length,
//         i;
//     for(i = 0; i < len; i += 1) {
//         var currentChar = s[i];
//         if(typeof tmp[currentChar] !== 'undefined') {
//             currentMaxRange = Math.max(currentMaxRange, i - lastRepIndex);
//             lastRepIndex = Math.max(tmp[currentChar], lastRepIndex);
//         } 
//         tmp[currentChar] = i + 1;

//     }
//     console.log(lastRepIndex);
//     console.log(i);
//     return Math.max(currentMaxRange, i - lastRepIndex);
//   };



var lengthOfLongestSubstring = function (s) {
    let currObj = {};
    let lastRep = 0;
    let currMaxRange = 0;
    for (let i = 0; i < s.length; i++) {
        if (currObj[s[i]]) {
            lastRep = Math.max(lastRep, currObj[s[i]]);
            currMaxRange = Math.max(currMaxRange, i - lastRep);
        }
        currObj[s[i]] = i + 1;
    }

    return Math.max(currMaxRange, s.length - lastRep)

};

//   console.log(lengthOfLongestSubstring("abcabcd"));


var characterReplacement = function (s, k) {
    let left = 0, right = 0, max = 0, freqMap = {}, freqMax = 0;

    for (right = 0; right < s.length; right++) {
        freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
        freqMax = Math.max(freqMap[s[right]], freqMax);

        while (right - left + 1 - freqMax > k) {
            freqMap[s[left]] -= 1;
            left++;
        }
        max = Math.max(right - left + 1, max)
    }
    return max;
}

// console.log(characterReplacement("abaa"));

var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1)
    }

    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i]) - 1)
        }
        else {
            return false;
        }
    }


    return true;


};

// console.log(isAnagram("rat","car"));

var isValid = function (s) {

    var stack = []

    for (let i = 0; i < s.length; i++) {
        if (s == '(' || s == '{' || s == '[') {
            stack.push(s);
            console.log(stack);
        }
        else if (s === ')' && stack.pop() !== '(') {
            return false;
        }
        else if (s === '}' && stack.pop() !== '{') {
            return false;
        }
        // else if(s===']' && stack.pop()!=='['){
        console.log(stack.pop());
        // return false;
        // }
    }

    return stack.length === 0 ? true : false;


};

// console.log(isValid('()[}'));

var isPalindrome = function(s) {
    let tempStr = "" 
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            tempStr= tempStr+s[i].toLowerCase()
        }
         
     }
     console.log(tempStr);
    for(let i=0;i<tempStr.length/2;i++){
        if(tempStr[i]!=tempStr[tempStr.length-1-i]){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("0P"));


function checkP(tempStr){
    for(let i=0;i<tempStr.length/2;i++){
        if(tempStr[i]!=tempStr[tempStr.length-1-i]){
            return false;
        }
    }
    return true;
}

var longestPalindrome = function(s) {

    var current = ""
    var currP = ""
    var maxP = ""

    for(let i=0;i<tempStr.length;i++){
        current=
        currP = Math.max(currP,checkP())
    }
    
};

console.log(longestPalindrome("babad"));
