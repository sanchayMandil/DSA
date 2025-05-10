let nums = [2,3,1,0]
console.log(maxHit(nums));
function maxHit(nums){
    let pre_sum = [] ,temp=0;;
    for(let i =nums.length-1;i>0;i--){
        pre_sum.push(temp+nums[i]);
        temp = pre_sum[pre_sum.length-1];
    }
    console.log(pre_sum);
    // count max hit 
    temp=0;
    let res=0,len_pre = pre_sum.length-1;
    for(let i =0;i<nums.length-1;i++){
        temp+=nums[i]
        if(temp>=pre_sum[len_pre])
            res++;
        len_pre--;
    }
    return res;
}