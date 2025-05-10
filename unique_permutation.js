var permuteUnique = function(nums) {
    let res =[];
    function gen_qunice_prem(arr,index){
        // inserting the unique value in result
        if(index == arr.length){
            res.push(arr.slice());
            return;}
        //making array to trace the element so it does not repeate the value 
        let bol_val = new Array(21).fill(true);
        for(let i =index; i<arr.length;i++){
            if(bol_val[arr[i]+10]==true){// if it is not visited
                // simple swap
                let c = arr[index];
                arr[index] = arr[i];
                arr[i] = c;
                gen_qunice_prem(arr,index+1);// going for the next element
                // simple swape agin to do back tracjing
                 c = arr[index];
                arr[index] = arr[i];
                arr[i] = c;
                // marking the visited element false
                bol_val[arr[i]+10]=false;}
        }
    }
    gen_qunice_prem(nums,0);
    return res;
};
let nums = [1,1,2];
console.log(permuteUnique(nums))