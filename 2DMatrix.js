let ar = [[1,3,5,7],
        [10,11,16,20],
        [23,30,34,60]];
let row,end,target= 3,start =0;
for(let j =0;j<ar.length;j++){
    if(ar[j][0]<=target && ar[j][ar[j].length-1]>=target)
        row = j;
}
end = ar[row].length;
while(start<=end){
    let mid = Math.floor((start + end) / 2) 
    if(ar[row][mid]== target){
        console.log("present");
        break    
    }else if (ar[row][mid]< target){
        start = mid+1;
    }else{
        end = mid -1;
    }
}


