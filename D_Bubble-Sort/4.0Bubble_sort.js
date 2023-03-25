// ----------------------------------
// bubble-sort defination
// [6,4,2,8,9]
// [4,6,2,8,9]
// [4,2,6,8,9]
// [4,2,6,8,9] ---list
// ----------------------------------

// bubbsort its sort algorithm that sort number or matrix from the min to max
var  bubbleSort =(nums)=>{
// note we did add swapped false in block-code because if we added in front we will see infinite loop
// so will looping throught list every time looping
do {
var swapped = false ;
// this is big(O)
for (let i = 0; i < nums.length; i++) {
if (nums[i]>nums[i+1]) {
 const temp = nums[i];
 nums[i] = nums[i+1]
 nums[i+1] = temp;
 swapped = true;
  }
 }
} while(swapped);
return nums;
}
 document.writeln(bubbleSort([5,20,1,10,9]))
