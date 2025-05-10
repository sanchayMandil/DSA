let nums = [2,11,10,1,3], k = 10
function minOP(nums,k){
    if(nums.length ==1)  return 0;
    nums.sort((a,b)=>b-a);
    let  val = Math.min(nums[nums.length-1],nums[nums.length-2])*2 +Math.max(nums[nums.length-1],nums[nums.length-2]),count=0;
    while(k>nums[nums.length-1]){
        count++;
        nums.pop();
        nums.pop();
        nums.push(val);
        val = Math.min(nums[nums.length-1],nums[nums.length-2])*2 +Math.max(nums[nums.length-1],nums[nums.length-2]);
        console.log(nums);
    }
    return count;
}
console.log(minOP(nums,k));
var minOperations = function(nums, k) {
    const minHeap = new MinPriorityQueue({ priority: x => x });
    for (const num of nums) {
        minHeap.enqueue(num);
    }
    let operations = 0;
    while (minHeap.front().element < k) {
        let x = minHeap.dequeue().element;
        let y = minHeap.dequeue().element;
        let newElement = x * 2 + y;
        minHeap.enqueue(newElement);
        operations++;
    }
    return operations;
};