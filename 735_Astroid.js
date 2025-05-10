let arr = [5,10,-5];
console.log(astroid(arr));
function sameDirec(first ,second){
    if(first>0 && second>0) return true
    if(first<0 && second<0) return true
    return false
 }
function astroid(as) {
    let res=[as[0]];
    for(let i =1;i<as.length;i++){
        if(sameDirec(res[res.length-1],as[i])) res.push(as[i]);
        else{
            if(Math.abs(res[res.length-1])<Math.abs(as[i])){
                res.pop();
                res.push(as[i]);
            }
        }
    }
    return res;
};