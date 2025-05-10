let words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]
console.log(vovelRange(words,queries));
function vovel(s){
    return (s=='a'|| s=='e'||s=='i'||s=='o'||s=='u')? true :false;
}
function vovelRange(words,queries){
    let count =[],result=[],temp=0;
    // count vovel in full range
    for(i =0;i<words.length;i++){
        let res =0;
        if(vovel(words[i][0]) && vovel(words[i][words[i].length-1]))
           res=1
        count.push(res+temp);
        temp = count[i];
    }
    // genrate result by querie 
    for(let i=0;i<queries.length;i++){
        if(queries[i][0]==0)
            result.push(count[queries[i][1]]);
        else if(queries[i][0]==queries[i][1]){
            result.push(count[queries[i][1]]- count[queries[i][0]-1])
        }
        else{
            result.push(count[queries[i][1]]- count[queries[i][0]])
        }
    }
    return result;
}