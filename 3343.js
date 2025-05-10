/**
 * @param {string} num
 * @return {number}
 */
function balance(str){
    //for even 
    let res_ev =0,res_od =0;
    for(let i =0;i<str.length;i+=2){
        res_ev+=Number(str[i]);
    }
    //for odd
    for(let i=1;i<str.length;i+=2){
        res_od+=Number(str[i]);
    }
    return res_ev == res_od;
 }
function countBalancedPermutations(num) {
    const mod = 1e9+7;
    let count =0;
    let res_temp=[],memo_Arr=new Set(),feq = new Set();
    function arangeCheck(arr,sign){
        if(memo_Arr.has(res_temp.join("")))
            return;
        if(res_temp.length == num.length){
            memo_Arr.add(res_temp.join(""));
            if(balance(res_temp))
                count++;
        }
        for(let i =0;i<sign.length ;i++){
            if(sign[i]==0){
                res_temp.push(arr[i])
                sign[i] = 1;
                arangeCheck(arr,sign);
                res_temp.pop();
                sign[i]=0
            }
        }
    }
    let arr = num.split("");
    let sign = new Array(num.length).fill(0);
    // calling the arngeCkeck 
    arangeCheck(arr,sign)
    return count%mod;
};
//console.log(countBalancedPermutations("112")) // 0
//console.log(countBalancedPermutations("112")) // 2
console.log(countBalancedPermutations("875654570")) // 0