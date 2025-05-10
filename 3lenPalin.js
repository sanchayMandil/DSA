let s = "aabca";
console.log(maxPalindrome3len(s));
function findMAxPlaindrome(start,end){
    if(start==end)
        return 1;
    let charater_set = new Set();
    while(start<=end){
        charater_set.add(s[start])
        start++;
    }
    return charater_set.size;
}
function maxPalindrome3len(s){
    // finding the first and the last most elemnt in the string 
    let last_index = new Map();
    for(let i=0;i<s.length;i++){
        if(last_index.get(s[i])==undefined)
            last_index.set(s[i],[i,i]);
        else{
            last_index.set(s[i],[last_index.get(s[i])[0],i]);
        }
    }
    let res =0;
    for(let [key,val] of last_index){
        if(val[0]!=val[1])
            res+=findMAxPlaindrome(val[0]+1,val[1]-1);
    }
    return res;
}