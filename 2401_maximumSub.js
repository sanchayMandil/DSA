let nums = [1,3,8,48,10]
function maxSub(nums){
    let s= 0;e=1,res=0,flag=false;
    while(e<nums.length){
        if((nums[e-1] & nums[e] )==0){
            res++;
            flag= true;
            e++;
        }else{
            res= Math.max(res,e-1-s);
            s=e;
            e=s+1;
        }
    }
    if(flag==true) return res ;
    else return 1;
}
console.log(maxSub(nums));