
alert("TEST");

function big_o(xarr){
 var answer = [];

 for (let inx = 0; inx < xarr.length; inx++) {

    //first element

    var first = xarr[inx];
    
    //second element

    var second = xarr[xarr.length-1 - inx] ;
      document.writeln(xarr[xarr.length-1] );
    //add togather 
    answer.push(first+second);

 } 

return answer; 
 
}


document.writeln( big_o([1,5,23]));