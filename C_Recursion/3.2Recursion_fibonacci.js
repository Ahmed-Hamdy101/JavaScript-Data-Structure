var wr =(msg='---------------------')=>document.writeln(`<br> + ${msg}`); // function with arugements msg and will return new line + Msg   

// fibonacci with Recurison 
function fibonacci(n){
 if(n<=2) { // if 1 < 2 return 1;  1.1 , 2 <=2 return 1;   2.1 , 3 <= 2 => else { return 2 + 1} 3.2  , 4<=2 else{return 3+2} 4.5 ; 5<=2 else{ return 4+3} 5.7 , else{return 5+4} 6.9; else{6+5} 7.11; else{7+6} 8.13; else{8+7} 9.15 ; else{9+8} 10.17;  
  return 1;         
 }
 else {
 return fibonacci(n-1)+fibonacci(n-2);
 }
 }

 for(var i =1 ; i<=20;i++){
 
 wr(`${i} . ${fibonacci(i)}`); // template string
 
 
 }