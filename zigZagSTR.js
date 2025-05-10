ar = [];
r=1
c=1,f=0;
new_sr="";
ar.length=r;
ar.fill("");
str="Ab";
for(let i= 0;i<str.length;i++){
    if(c==1){
        if(f<r){
            ar[f]+=str[i];
            f++;
            if(f==r){
              f=r-2;
              c=2;}
        }
    }
    else{
        if(f>-1){
            ar[f]+=str[i];
            f--;
            if(f==-1){
                c=1;
                f=1;}
        }
    }
}
for (let i =0;i<ar.length;i++){
    new_sr+=ar[i];
}
console.log(new_sr);
