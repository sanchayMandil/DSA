let strs = ["eat","tea","tan","ate","nat","bat","",""];
groupAnagrams(strs);
function groupAnagrams(strs) {
    if(strs.length == 1) return strs
    let strMap = new Map();
    for(i=0;i<strs.length;i++){
        let newSos = strs[i].split("").sort().join("");
        if(strMap.get(newSos)== undefined){
            strMap.set(newSos,[strs[i]]);
        }else{
            strMap.get(newSos).push(strs[i]);
        }
    }
    let res = [];
    for (let [key,val] of strMap){
        res.push(val);
    }
    console.log(res);
};