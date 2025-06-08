let k=0,arr =[5,7,4,1];
function genrateCode(b,k){
    let ans = new Array(b.length).fill(0);
    if(k==0) return ans;
    let sum=0;
    if(k>0){
    for(let i =0;i<k;i++){
        //makeing the first window 
        sum+=b[i]
    }
    ans[b.length-1] =sum;
    let index=1,end=k-1
    while(index<=b.length-1){
        sum-=b[index-1];
        sum+=b[(end+1)%b.length];
        ans[index-1]=sum;
        index++;
        end++;
    }
    }else{
        for(let i=b.length+k;i<b.length;i++){
            sum+=b[i];
        }
        ans[0]=sum;
        let index=1,start=b.length-1+k;
        while(index<b.length){
            sum-=b[(start+1)%b.length]
            sum+=b[index-1]
            ans[index]=sum;
            index++;
            start++;
        }
    }
 
    return ans;
}
console.log(genrateCode(arr,k));
console.log(genrateCode([2,4,9,3],-2))