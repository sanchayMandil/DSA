let boxes = "110";
miniOperation(boxes);

function miniOperation(boxes) {
    if(boxes.length==1) return [Number(boxes[0])];
    let pre_sum = new Array(boxes.length), post_sum = new Array(boxes.length), temp_sum = 0;
    let boxesArray = boxes.split("").map(Number); // Convert string to array of numbers

    // Calculate pre_sum and post_sum in a single pass
    for (let i = 0, j = boxesArray.length - 1; i < boxesArray.length; i++, j--) {
        temp_sum += boxesArray[i];
        pre_sum[i] = temp_sum;
    }
    
    temp_sum = 0;
    for (let j = boxesArray.length - 1; j >= 0; j--) {
        temp_sum += boxesArray[j];
        post_sum[j] = temp_sum;
    }

    for (let i = 0; i < boxesArray.length; i++) {
        if (i == 0) boxesArray[i] = post_sum[i + 1];
        else if (i == boxesArray.length - 1) boxesArray[i] = pre_sum[i - 1];
        else boxesArray[i] = post_sum[i + 1] + pre_sum[i - 1];
    }

    console.log(boxesArray.join("")); // Convert array back to string if needed
}
