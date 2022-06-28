function findNextGreaterEl(arr){
    let stack = [];
    let arr2 = [-1]
    stack.push(arr[arr.length-1])
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]<stack[stack.length-1])
        {
            arr2.push(-1)
            stack.push(arr[i])
        }
        else{
            // stack.push(arr[i])
            while(stack && arr[i]>stack[stack.length-1]){
                stack.pop();
            }
            stack.push(arr[i])
            arr2.push(stack[stack.length-1])
            
        }
    }

    return arr2.reverse();
}

console.log(findNextGreaterEl([1,3,2,4]))