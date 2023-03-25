// factorial of n

// 5 4 3 2 1
function factorial(n){	
var factN =1;
if(n<=2){
return n;
}
else{
for(var i=n;i>=1;i--){
 factN = factN * i;
}
return factN;
}

}


//do recursion
function recursive(n){
if(n<2) return 1;
return n * recursive(n-1);
}
document.writeln(recursive(5));

document.writeln(factorial(3));
