let arr=[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
function countIsland(arr){
    let row = arr.length,count=0;
    function coverArea(i,j){
        if(i<0 || j<0 || i>row-1 || j>arr[i].length-1 || arr[i][j] != 1) return;
        // mark the area as visited
         arr[i][j]=-1;    
        //up
        coverArea(i-1,j);
        //right
        coverArea(i,j+1);
        //down
        coverArea(i+1,j);
        //left
        coverArea(i,j-1);
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==1){
                // now map the area of the island
                coverArea(i,j);
                count++;
            }
        }
    }
    console.log(count);
}
countIsland(arr);