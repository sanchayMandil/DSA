let ar= [2,5,11,45,9,1];
function selection_Sort(arrray){
    for(let i =0;i< arrray.length-1;i++){
        let  min_index = i;
        for( let j = i+1;j<arrray.length;j++){
            if(arrray[i] > arrray[j] ){
                min_index = j;
            }
            swap( i ,min_index, arrray);
        }
    }
    return arrray
}
function swap(swap1 , swap2, arrray){ 
    let val = arrray[swap1];
    arrray[swap1] = arrray[swap2];
    arrray[swap2] = val; 
}
ar = selection_Sort(ar);
for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
}