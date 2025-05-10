ar  = [-1,0,1,2,-1,-4]
ar.sort((a, b) => a - b);
console.log(ar);
ans_arr=[];
ans_arr.length=3;
for(let i =0;i< ar.length-2;i++){
    j=i+1;
    k=i+2;
    if(ar[i]+ar[j]+ar[k]==0){
        ans_arr.push([ar[i],ar[j],ar[k]]);
    }
    j++;
    k++;
}
console.log(ans_arr)