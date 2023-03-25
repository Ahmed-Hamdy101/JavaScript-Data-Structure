 
 function ChoosItem(needle,haystack){
   
 for(var index = 0 ; index<haystack.length;index++){
    
	if(haystack[index]==needle){
		return needle; 
		}
		else{
		  haystack.push(needle)
			alert(" we have added  it !")
		}
	}
	return alert("user has been configured")
 }
 
 document.writeln( ChoosItem('java',['strawberry' , 'Apple' ,'Orange','Lemon','Peanples','user1']))
 
 