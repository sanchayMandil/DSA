let ar = [0,0,1,1,2,3,3,4,4,5,6,6,6];
let start =0, end =1;
while(end != ar.length){
    if(ar[start]== ar[end]){
        ar[end] = null;
        end++
    }else{start= end;
        end++;
    }
}
let count =0;
for(let i =0;i<ar.length;i++){
    if(ar[i]== null)
        continue;
    else
     count++;
}
console.log(count);
console.log(ar);
ar = [0,0,1,1,2,3,3,4,4,5,6,6,6];
var removeDuplicates = function(ar) {
    if (ar.length === 0) return 0;  // Edge case for empty array

    let count = 1;  // Start count with 1 as the first element is always unique
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] !== ar[i - 1]) {
            ar[count] = ar[i];  // Move the next unique element forward
            count++;  // Increment count for each unique element
        }
    }
    
    return count;
};
removeDuplicates(ar);
console.log(ar);
