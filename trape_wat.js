// //total trapped water in betwwen building
// let arr = [2,0,2];
// let max_in =0;
// let max_hight=0;
// // for max value
// for (let i =0;i<arr.length;i++) {
//     if(arr[i]>max_hight)
//         max_in = i;}
// let start_point=0, leat_point= (arr.length-1) , water=0;
// let left_max = arr[0], rigth_max= arr[arr.length-1];
// while(start_point<leat_point){
//     // left side 
//     //console.log("s "+start_point);
//     if(arr[start_point] < arr[max_in] ){
//         if(left_max >= arr[start_point]){
//             water += left_max-arr[start_point];
//             start_point++;}
//         else{
//             left_max= arr[start_point];
//             start_point++;}
//     }
//     // right side 
//     //console.log("l "+leat_point);
//     if(arr[leat_point] < arr[max_in] ){
//         if(rigth_max > arr[leat_point]){
//             water+= rigth_max-arr[leat_point];
//             leat_point--;}
//         else{
//             rigth_max= arr[leat_point];
//             leat_point--;}
//     }
// }
// console.log("total water "+water);
console.log("hello")
