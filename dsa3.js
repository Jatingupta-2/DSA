function findRotation(arr){
    let lo = 0;
    let hi = arr.length-1;

    while(lo<=hi){
        let middle = Math.floor((lo + hi)/2);
        
       if(arr[middle]<arr[middle+1] && arr[middle]<arr[middle-1]){
        console.log(arr[middle])
        return arr.length - middle ;
       }
        else if(arr[middle]>arr[hi]){
        lo = middle+1;
       }
       else{
        hi = middle -1;
       }
    }
    return -1;
}

// console.log(findRotation([11,12,13,14,15,2,3,4]))


function findInCSA(arr, num){
    let lo= 0;
    let hi = arr.length-1;

    while(lo<=hi){
        let middle = Math.floor((lo+hi)/2)
        // console.log(middle,arr[middle])
        if (arr[middle] === num){
            return middle;
        }
        if(arr[middle]<arr[hi]){
            if(num>arr[middle] && num <= arr[hi]){
                lo = middle+1
            }
            else{
                hi = middle-1
            }
        }
        else{

            if(num>=arr[lo] && num < arr[middle]){
               hi = middle-1
            }
            else{
                lo = middle+1
            }

            
        }
    }

    return -1;
}

console.log(findInCSA([11,12,13,14,15,2,3,4],3))