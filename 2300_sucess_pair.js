function sucessPair(spells,portions,sucess){
    let res =[];
    portions.sort((a,b)=>a-b);
    for(let i =0;i<spells.length;i++){
        let l=0,r=portions.length-1;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            if(spells[i]*portions[m]>=sucess){
                r=m-1;
            }else{
                l=m+1
            }
        }
        res.push(portions.length-l)
    }
    return res;
}
let spells = [3,1,2], potions = [8,5,8], success = 16
console.log(sucessPair(spells,potions,success));