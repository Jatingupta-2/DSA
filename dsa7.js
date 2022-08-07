function stock(prices){
    let min = prices[0]
    let profit = 0
    for(let i=0;i<prices.length;i++){
        min = Math.min(min,prices[i])
        currProfit = prices[i] - min
        profit = Math.max(profit, currProfit)
    }
    
    return profit;
}

// console.log(stock([4,1,3,6,9,2,3]))

function containsDuplicate(nums){
    var map = new Map()
    for(let i=0;i<nums.length;i++){
    if(map.get(nums[i])>0){
        return true
    }else{
            map.set(nums[i],(map.get(nums[i]) || 0 )+1)
        }
    }
    return false;
}

// console.log(containsDuplicate([1,2,3,4]))


var productExceptSelf = function(nums) {
    
    let arr = [1];
    let product = 1;
    
    for(let i=1;i<nums.length;i++){
        product *= nums[i-1]
        arr.push(product)
    }

    
    
    product = 1;
    
    for(let i=arr.length-2;i>=0;i--){
        
         product = product * nums[i+1]; 
        arr[i] *= product;
        console.log(i,nums[i+1],arr[i],product)
    }
    
    return arr;
    
};


console.log(productExceptSelf([1,2,3,4]))