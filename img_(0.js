//let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let matrix =[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
let n = matrix.length;
let new_id = new Array(n*n).fill(0);
for(let i =0;i<new_id.length;i++){
    let row = Math.floor(i/n);
    let col = Math.floor(i%n);
    new_id[i]= matrix[row][col];}
    let c=0;j=new_id.length-n,k=0;
while(c<n){
    let row = Math.floor(k/n);
    let col = Math.floor(k%n);
    matrix[row][col]= new_id[j];
    j-=n;
    k++
    if(k%n==0){
        c++;
        j=new_id.length-n+c;
    }
}
console.log(matrix);