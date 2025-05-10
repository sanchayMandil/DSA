let arr=[1,5,6]
let sum =5;
let way_of_sum = function(arr,sum){
    let res =[]
    function way_to_sum(current,temp_sum){
        //checking the current value that they reach the to the sum or not 
        if(temp_sum==0){
            res.push(current.slice())
            return;}
        for(let i =0;i<arr.length;i++){
            //before add the arr element in current checking temo_sum is greater or == to the 0
            if(temp_sum -arr[i] >=0){
                current.push(arr[i]);
                way_to_sum(current,temp_sum-arr[i]);
                current.pop();}
        }
    }
    way_to_sum([],sum)
    return res;
}
console.log(way_of_sum(arr,sum));