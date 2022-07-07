var twoSum = function(nums, target) {
    
    let map = new Map()
    
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
        }
        else{
            map.set(nums[i],i)
        }
    }
    
};

// console.log(twoSum([2,7,11,15],9))

var maxProduct = function(nums) {
    let curr = 1;
    let product = nums[0];
    let totalProduct = 1;
    
    for(let i=0;i<nums.length;i++){
         totalProduct *= nums[i]
        curr = Math.max(nums[i],curr*nums[i])
        curr = Math.max(curr,totalProduct)
        console.log(totalProduct,curr)
        product = Math.max(curr,product)
    }
    
    return product;
};

console.log(maxProduct([2,-5,-2,-4,3]))