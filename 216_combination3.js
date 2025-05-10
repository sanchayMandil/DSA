let k=4,n=1;
function combination(k,n){
    if(k>n) return [];
    let res = [],temp=[];
    function makeCombi(idx,sum){
        if(temp.length==k && sum == n){
            res.push(temp.slice());}
        for(let i =idx;i<=9;i++){
            if(sum+i<=n){
                temp.push(i);
                makeCombi(i+1,sum+i);
                temp.pop();
            }else return ;
        }
    }
    makeCombi(1,0);
    return res
}
combination(k,n);