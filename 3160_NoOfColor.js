let limit = 1, queries = [[0,1],[1,4],[1,1],[1,4],[1,1]]
var Distinct = (limit,queries)=>{
    let result = [];
    let colur_Map = new Map();
    let set_color = new Array(limit+1).fill(-1);
    for(let i =0;i<queries.length;i++){
        if(colur_Map.get(queries[i][1])==undefined && set_color[queries[i][0]]==-1){
            colur_Map.set(queries[i][1],[queries[i][0]]);
            set_color[queries[i][0]]= queries[i][1];
        }
        else {
            colur_Map.delete(set_color[queries[i][0]]);
            colur_Map.set(queries[i][1],[queries[i][0]]);
            set_color[queries[i][0]]= queries[i][1];
        }
        result.push(colur_Map.size);
        console.log(colur_Map);
    }
    return result;
}
console.log(Distinct(limit,queries));