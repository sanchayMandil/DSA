let str ="[{}){}]";
let res =[];
for(let i =0;i<str.length;i++){
    if(res.length==0)
        res.push(str[i]);
    else if(res.length>0){
        if(str[i]=='{' || str[i]=='[' || str[i]=='('){
            res.push(str[i]);
        }else{
            if(str[i]=='}'){
                if(res[res.length-1]=='{')
                    res.pop();
                else
                    res.push(str[i]);
            }
            if(str[i]==']'){
                if(res[res.length-1]=='[')
                    res.pop();
                else
                    res.push(str[i]);
            }
            if(str[i]==')'){
                if(res[res.length-1]=='(')
                    res.pop();
                else
                    res.push(str[i]);
            }
        }
    }
}
