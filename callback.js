function plus(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function ans(a,b,fuc){
    var ans = fuc(a,b);
    console.log(ans);
}

ans(1,2,plus);
ans(1,2,minus);