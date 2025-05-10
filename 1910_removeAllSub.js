let s ="kirkirkirpgpgpkirpgkirkirpgkirpgkikikirpgrpgrkirpkirpgkirpggpgpkikirpgrkirkirpgpgpggkikirpgrpggkirpgbkirpgthytpyimz",
 part ="kirpg";
function RemoveAllSub(s,part){
    let p_len= part.length;
    let part_1Char = [];
    for(let i =0;i<s.length;i++){
        if(s[i]==part[0])
            part_1Char.push(i)
    }
     return  replaceAllBy(part_1Char,s,part,p_len);
}
function replaceAllBy(arr,s,part,p_len){
    let i = arr.length-1;
    while (i >-1) {
        if (s.substr(arr[i], p_len) == part) {
            if (arr[i] == 0) {
                s = "" + s.slice(arr[i] + p_len);
            } else {
                s = s.slice(0, arr[i]) + s.slice(arr[i] + p_len);
            }
            arr[i] = -1;
            for (let j = i; j < arr.length; j++) {
                arr[j] -= p_len;
            }
            i = arr.length; // Reset i to 0 to recheck the entire array
        } else {
            i--;
        }
    }
    return s;
}
console.log(RemoveAllSub(s,part))