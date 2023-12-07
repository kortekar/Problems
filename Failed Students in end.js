/*
In A exam with negative marking the passing criteria is you have to score zero or positive marks .
we have given an array which denotes the score of the students in that exam .
you have to move all the failed students to last of the array .
Solve this Question in 0(N) time complexity. Using two pointers. Watch Hints if not being able to figure out.

Example 1:
Input : 
N = 8
arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
Output :  1 3 2 11 6 -1 -7 -5

Example 2:
Input :
N=8
arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
Output : 7 9 10 11 -5 -3 -4 -1

Constraints:
1 ≤ N ≤ 10^5
-10^5 ≤ arr[] ≤ 10^5      */

function(nums) {
       let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] < 0 && nums[right] >= 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else {
            if (nums[left] >= 0) {
                left++;
            }
            if (nums[right] < 0) {
                right--;
            }
        }
    }
    return nums;
};
