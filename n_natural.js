nums = [1,2,0];
//nums = [3,4,-1,1]
//nums =  [7,8,9,11,12]
    let pres = true, n = nums.length, nth =0;
    for(let i =0;i<n; i++){
        if(nums[i]==1){
            pres= false;
            break;}
    }
    if(pres)
        console.log("1");
    for(let i =0;i<n;i++){
        if(nums[i]<1)
            nums[i] = 1;
        if (nums[i]>n)
            nums[i] =1;
    }
    console.log(nums);
    for(let i =0;i<n;i++){
        nth = Math.abs(nums[i]);
        ind = nth-1;
        if(nums[ind]>0)
            nums[ind]=-1*nums[ind];
    }
    console.log(nums);
    for(let i =0; i<n ;i++){
        if(nums[i]>0)
            console.log(i+1);
    }
console.log(10**(1-1));