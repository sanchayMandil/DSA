let final_ans = function(num){
    let res =[];
    function gen_str( max , open, close, temp){
        if( open +close == 2*max){
            res.push(temp.join(''))
            return
        }
        if(open<max){
            temp.push("(");
            gen_str(max,open+1,close,temp);
            temp.pop();
        }
        if(close<open){
            temp.push(")");
            gen_str(max,open,close+1,temp);
            temp.pop();
        }
    }
    gen_str(num, 0,0,[]);
    return res;
}
console.log(final_ans(3));