function PTringle(n) {
    if(n==1) return [[1]];
    if(n==2) return [[1],[1,1]]
    let res = [[1],[1,1]];
    for(let i =3;i<=n;i++){
        let tempA = new Array(i).fill(1);
        // pre row computation 
        let fill =1,preRow = res.length-1;
        console.log("preRow "+ preRow)
        for(let pre = 0;pre<res[preRow].length-1;pre++){
            tempA[fill] = (Number(res[preRow][pre])+Number(res[preRow][pre+1]))
            fill++;
        }
        res.push(tempA);
    }
    return res[res.length-1];
};

console.log(PTringle(5));