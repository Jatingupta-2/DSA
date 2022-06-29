function sort012Arr(arr){
    let hi = arr.length-1
    let lo = 0
    let middle = 0

    while(middle<hi){
    
        if(arr[middle] === 0){
            let temp = arr[lo];
            arr[lo] = arr[middle]
            arr[middle]= temp;
            lo++;
            middle++;
        }
        else if(arr[middle] === 1){
            middle+=1;
        }
        else{
            let temp = arr[hi];
            arr[hi] = arr[middle]
            arr[middle]= temp;
            hi-=1;
        
    }
}

    return arr;

}

// console.log(sort012Arr([2,2,1,0,1,0,1,0,0,2]));

function moveNegative(arr){
    let lo =0
    let mid = 0;

    while(mid<arr.length){
        if(arr[mid]<0){
            let temp = arr[lo];
            arr[lo] = arr[mid]
            arr[mid]= temp;
            lo++;
        }
        
        mid++;
    }
    return arr;
}

console.log(moveNegative([-12, 11, -13, -5,6, -7, 5, -3, 11]));

function findInUnionArr(arr1,arr2){

}

console.log(object);