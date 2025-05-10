let n =3 ,k=3;
function Find_kyhpermutation(n,k){
    let AR = new Array(n).fill(1);
    let res,cn=0; ;
    function permutation(per,AR,dep){
        if (dep == n) {
            cn++;
            if (cn === k) 
                res = per.join('');
            return;
        }
        for(let i =0;i<AR.length;i++){
            if(AR[i]!=0){
            per.push(i+1);
            AR[i]=0;
            permutation(per,AR,dep+1);
            AR[i]=1;
            per.pop();
            if(cn==k) return;
            }
        }
    }
    permutation([],AR,0);
    return res
}
console.log(Find_kyhpermutation(3,3))