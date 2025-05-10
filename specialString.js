let str ="";
console.log(speSub(str));
function speSub(str){
    if(str.length<3)
        return -1;
    let start = 0,end =1,pre = str[start];
    let Substring = new Map();
    Substring.set(str.slice(start,end),1)
    //console.log(str.slice(start,end))
    // map 
    while(start < str.length){
        if(pre== str[end]){
            //console.log(str.slice(start,end+1));
            if(Substring.get(str.slice(start,end+1))== undefined){
                Substring.set(str.slice(start,end+1),1)
            }else{
                let value = Substring.get(str.slice(start,end+1));
                Substring.set(str.slice(start,end+1),value+1);
            }
            end++;
        }
        else{
            start++;
            pre= str[start];
            end= start;
        }
        if(end==str.length){
            start++;
            end= start;
            pre= str[start];
        }
    }
    // map filter
    let lengthSub=-1;
    for(var [ key , val] of Substring){
        console.log(key+" "+val);
        if(val>=3){
            //length filter
            if(lengthSub<key.length){
                lengthSub = key.length;
            }
        }
    }
    return lengthSub;
}