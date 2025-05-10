let  ar1= [2,4,4,4,5,9,9,11];
let start =0,end = ar1.length;
const target = 5;
var first=-1, last = -1;
//first 
while(start<=end){
    var mid = (start +end)/2;
    if(ar1[mid]==target){
        first =mid;
        end=end-1;}
    else if(ar1[mid]<target)
        start= mid+1;
    else
        end=end-1;
}
// last
start = 0;
end= ar1.length;
while(start<=end){
    var mid = (start+end)/2;
    if(ar1[mid]==target){
        last =mid;
        start= mid+1;}
    else if(ar1[mid]<target)
        start= mid+1;
    else
        end=end-1;
}
if(last==-1 && first==-1)
    console.log("do not exixt");
else
    console.log(last-first+1);