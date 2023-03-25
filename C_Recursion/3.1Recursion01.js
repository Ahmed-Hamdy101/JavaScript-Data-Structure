 // if want to loop again point to back 
 let write = (Mes='---------------') => document.write(`<br> ${Mes}`);

 function Recurison(max,current){
if(current>max)
return write("this reach to end ! "+current) ;
write(current);
Recurison(max,current+1);
 }

 Recurison(5,1);
 write();
 write();
