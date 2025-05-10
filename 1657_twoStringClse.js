let s1 =  "abbzzca" , s2 ="babzzcz";
console.log(MtchString(s1,s2));
function MtchString(s1,s2){
    if (s1.length!=s2.length) return false;
    let s1_map= new Map();
    let s2_map = new Map();
    //maping s1,s2 charatere and there frequency in there respected map
    for(let i =0;i<s1.length ;i++){
        if(s1_map.get(s1[i])== undefined) s1_map.set(s1[i],1);
        else s1_map.set(s1[i],s1_map.get(s1[i])+1)
        if(s2_map.get(s2[i])== undefined) s2_map.set(s2[i],1);
        else s2_map.set(s2[i],s2_map.get(s2[i])+1)
    }
    //now checking the charate which are present in bothh map
    if(s1_map.size != s2_map.size) return false
    for (let [key] of s1_map)
        if(!s2_map.get(key)) return false
    let s1_A = Array.from(s1_map.values()),
    s2_A = Array.from(s2_map.values());
    // check the value frequency
    s1_A.sort((a,b)=>a-b);
    s2_A.sort((a,b)=> a-b);
    for(let i =0;i<s1_A.length;i++)
        if(s1_A[i]!=s2_A[i]) return false;
    return true;
}