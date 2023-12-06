/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/


function(height) {
    let n = height.length;
    const maxL = new Array(n).fill(0);
    const maxR = new Array(n).fill(0);
    maxL[0] = height[0];
    let sum =0;
    for(let i=1;i<n;i++){
        maxL[i] = Math.max(maxL[i-1] ,height[i]);
    }

    maxR[n - 1] = height[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        maxR[j] = Math.max(maxR[j + 1], height[j]);
    }
    
    for(let i=0;i<n;i++){
        maxL[i] = Math.min(maxL[i] ,maxR[i]);
        maxR[i] = maxL[i] - height[i];
        sum += maxR[i];
    }
  return sum ;
};
