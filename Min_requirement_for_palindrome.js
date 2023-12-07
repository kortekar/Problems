/*
You have given a string , You have to add characters at start of string to make it a palindrome .
return the minimum number of characters required to add to make it a palindrome.
Example 1:
Input:
str = "abcd"
Output: 3
Explanation: Inserted character marked with bold characters in dcbabcd

Example 2:
Input:
str = "aa"
Output: 0
Explanation:"aa" is already a palindrome.

Constraints:
1 ≤ |str| ≤ 10^3
str contains only lower case alphabets.
*/

function(s) {
    let count = 0;
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        if (s[left] !== s[right]) {
            count++;
            right--;
        } else {
            left++;
            right--;
        }
    }

    return count;
};
