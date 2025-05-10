let  grid = [[3,2,1],[1,7,6],[2,7,7]];
console.log(equalRowCol(grid));
function equalRowCol(grid){
    let map_all = new Map(),maxFre=1;
    // for row and its frequency
    let n = grid.length,res_col='',res_row='';
    // for column and its frequency
    for (let j = 0; j < n; j++) {
        res_col='',res_row=''
        for (let i = 0; i < n; i++) {
            res_col += grid[i][j];
            res_row += grid[j][i]
        }
        if(res_col==res_row){
        if (map_all.get(res_col) === undefined) 
            map_all.set(res_col, 1);
        else 
            map_all.set(res_col, map_all.get(res_col) + 1);
}
    }
    for(let [key,val] of map_all){
        if(maxFre<val) maxFre = val;
    }
    return maxFre;
}