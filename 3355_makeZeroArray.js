function makeZero(nums,query){
    //making the diffrence array
    let dif =new Array(nums.length).fill(0);
    for(let i =0;i<query.length;i++){
        let s= query[i][0],e=query[i][1];
        dif[s]==0? dif[s]=-1 : dif[s]+=-1;
        if(dif[e+1]==nums.length && dif[e]==0){
            dif[e]=1
        }else if(dif[e+1]==0) dif[e+1] =1
        //console.log(dif)
    }
    //console.log(dif)
    //prefix
    let sum = dif[0];
    for(let i=1; i<dif.length;i++){
        sum +=dif[i];
        dif[i]=sum;
    }
    console.log(dif);

    // check whether the array can become zero or not 
    for(let i =0;i<nums.length;i++){
        if(nums[i]>Math.abs(dif[i])) return false;
    }
    return true;
}
console.log(makeZero([1,0,1],[[0,2]]))
console.log(makeZero([4,3,2,1],[[1,3],[0,2]]));
console.log(makeZero([4,3,2,1],[[1,3],[0,2],[0,2],[0,2],[0,2]]));