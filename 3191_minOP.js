let nums= [0,1,1,1];
function minOperation(nums){
    if(nums.length<3) return -1;
    function opFlip(s,e){
        for(let i=s;i<=e;i++){
            if(nums[i]==0) nums[i]=1;
            else nums[i]=0;
        }
        op++;
    }
    let pre =0,op=0,e=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0 && i+2<nums.length){
            opFlip(i,i+2);
            //console.log(i,nums)
        }
        if(nums[i]==1) pre++;
        //console.log(i,nums,pre)
    }
    if(pre==nums.length) return op
    else return-1;
}
console.log(minOperation(nums));