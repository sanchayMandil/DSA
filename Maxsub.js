s = "0100"
console.log(max_sub(s));
function max_sub(s){
    let res = 0,p=0;
    let count_zero=0, count_one=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==1)
            count_one++;
    }
    if(count_one==s.length|| count_one==0)
        return s.length-1;
    while(p<s.length){
        console.log(res);
        if(s[p]==0){
            count_zero++;
            if(res<(count_zero+count_one))
                res = count_one+count_zero;
        }
        if(s[p]==1){
            if(count_one-1==0)
                break;
            count_one--;
            if(res<(count_zero+count_one))
                res = count_one+count_zero;
        }
        p++;
    }
    return res;
}