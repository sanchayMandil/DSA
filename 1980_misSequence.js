let nums = ["01","10"];
console.log(findDifferentBinaryString(nums));
function findDifferentBinaryString(nums) {
    let arr = [],res='',n = nums[0].length,flag =false;
    function missSeq(arr){
        if(arr.length!=n){
            for(let i =0;i<=1;i++){
                arr.push(i);
                missSeq(arr);
                if(flag) break;
                arr.pop()
            }
        }else{
            if(nums.includes(arr.join(''))){
                return 
            }else{
                res = arr.join('');
                flag = true;
            }
        }
    }
    missSeq(arr)
    return res;
};