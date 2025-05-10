let needle = 'll' , haystack ="hello"
console.log(1^1^1)
console.log(strStr(haystack,needle));
function strStr(haystack, needle){
    if(needle.length>haystack.length) return -1;
    if( needle == haystack ) return 0;
    for( let i =0; i<haystack.length ;i++)
    if(haystack.substr(i,needle.length) == needle) {
        console.log(haystack.substr(2,needle.length),i)
        return i;}
    return -1;
};