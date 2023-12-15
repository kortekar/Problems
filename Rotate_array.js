/*
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

function(nums, k) {
    const n = nums.length;
    const arr1 = nums.splice(0,n-(k%n));
    for(let i=0 ;i<arr1.length;i++){
        nums.push(arr1[i]);
    }
};
