let ar = [2,3,6,1,11];
reverse(ar,0);
function reverse(ar,i){
    if(i>=ar.length/2){
        return;
    }
    Swap(ar, i ,ar.length-i-1);
    reverse(ar,i+1);
}
function Swap(ar,l,R){
    temp = ar[l];
    ar[l] = ar[R];
    ar[R]=temp;
}
console.log(ar);