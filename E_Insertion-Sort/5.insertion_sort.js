const insertionSort =(nums)=>{
for (let i = 1; i < nums.length; i++) {
  for (let j = 0;j < i; j++) {
    document.writeln("j:"+j+"<br>");
    document.writeln("i:"+i+"<br>");
    if (nums[i]<nums[j]){
      // remove one item at index 5
       const spliced = nums.splice(i,1);
     // add new element to array without remove the element which is splice(2,0,2) [0,1,3] : [0,1,2,3];
       nums.splice(j,0,spliced[0]);
      document.writeln("nums : "+nums+"<br>");
    }
  }
}
return nums
};

document.writeln(insertionSort([0,4,5,87,35241,1,12,0]))
