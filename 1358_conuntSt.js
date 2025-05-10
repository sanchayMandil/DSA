let word = "abc";
function sbVovle(word){
    let mapWprd = new Map();
    let count = 0,start=0,end =0,win = false;
    while(end!=word.length){
        // end 
        if(mapWprd.get(word[end])== undefined)
            mapWprd.set(word[end],1);
        else
            mapWprd.set(word[end],mapWprd.get(word[end])+1);
        if(mapWprd.size == 3){
            count=count+word.length-end;
            win = true;
        }
        while(win){
            start++;
            if(mapWprd.get(word[start-1])>1) 
                mapWprd.set(word[start-1],mapWprd.get(word[start-1])-1)
            else
                mapWprd.delete(word[start-1]);
            if(mapWprd.size==3)
                count=count+word.length-end;
            else
                win = false;
        }
        end++;
    }
    return count;
}
console.log(sbVovle(word));