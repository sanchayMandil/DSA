let s ="ABABCABAB";
let Lps = new Array(s.length).fill(0);
let pre=0,suf=1;
while(suf<s.length){
    if(s[pre]==s[suf]){
        Lps[suf]=pre+1;
        suf++,pre++;}
    else{
        if(pre==0){
            Lps[suf]=0;
            suf++;}
        else
            pre = Lps[pre-1];
    }
}
console.log(s.substring(s.length-Lps[s.length-1]));