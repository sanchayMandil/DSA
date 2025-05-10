let nums = [3,1,3,4,3], k = 6// 1 3 3 3 4
console.log(maxOperations(nums,k));
function maxOperations(nums, k) {
    nums.sort((a,b)=>a-b);
    let start=0,cn=0,end =nums.length-1;
    while(start<end){
        let res = nums[start] + nums[end];
        if (res == k) {
            cn++;
            start++;
            end--;}
        else if(res<k) start++;
        else end--;
    }
    return cn;
};