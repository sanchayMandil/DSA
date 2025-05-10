let s ="2[abc]3[cd]ef";
function decodeStr(s){
    let res =[];
    for(let i=0;i<s.length;i++){
        if(s[i]!=']'){
        res.push(s[i])}else{
            //making the temp
            let j = res.length-1,temp='';
            while(res[j]!='['){
                temp=res[j]+temp;
                res.pop()
                j--;
            }// calculate the time
            res.pop();
            j--;
            let time ='';
            for(let k =j;k>j-3;k--){
                if(check(res[k])){
                    time=res[k]+time;
                    res.pop();
                }else break;
            }
           decode(temp,time);
           //console.log(time,temp,res)
        }
    }
    function check(val){
        if(val>=0 && val <=9) return true
        else return false;
    }
    function decode(str,time){
        for(let i = time;i>0;i--){
            res.push(str);
        }
    }
    return res.join('');
}
console.log(decodeStr(s));