//find the min max distance where you can place k numbers of cow
let ar= [17,2,5,9,11,16];
k = 3;
//for making it gerneral for every solution we do sorting 
//time complexcity o(n**2)
for(let i =0;i<ar.length;i++){
    for(let j=i;j<ar.length-1;j++){
        if(ar[j]>ar[j+1]){
            let tp = ar[j];
            ar[j]= ar[j+1];
            ar[j+1]= tp;
        }
    }
}
ar =[1,2,4,8,9]
//[ 2, 5, 9, 11, 16, 17 ]
// now we have to find the min distance which is max in between two com
// so after see the maximum distance we have for this is is max 2- 17
// which mean 15 distance can be 
let start = 1, end = (ar[ar.length-1]-ar[0]),ans =0,cow_count=1,pos_p=ar[0], mid=0;
while(start<=end){
    mid = Math.floor((start+end)/2);
    cow_count=1, pos_p=ar[0];
    console.log(ans+" mid "+ mid+" start "+start+" end "+end);
    for(let i=1;i<ar.length;i++){
        if(ar[i]>=pos_p+mid){
            pos_p= ar[i];
            cow_count++;
            console.log(mid+" postion is:"+ pos_p +" count :"+cow_count);
        }
    }
    if(cow_count<k)
        end = mid-1;
    else{
        start =mid +1;
        ans =mid;
    }
}
console.log(ans);