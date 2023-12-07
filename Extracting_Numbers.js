/*
Given a String Extract all numbers from it and store it inside an array. Return the Array Once extraction is completed.
Note that if the string is "abc334vf" then the number is 334 and not 3,3,4 as individual numbers
Example 1:
Input:
str = "abc334v44d"
Output: [334, 44]

Example 2:
Input:
str = "abv345fjjf123tyir45jf6th"
Output: [345, 123, 45, 6]

Constraints:
1 ≤ |str| ≤ 10^4
str contains only alphabets and digits.
Hint:- Try to solve the question via ascii value concept.
Ascii value :-
'0' is 48
'1' is 49
..
'9' is 57
'a' ascii value is 97
'b' ascii value is 98
...
'A' ascii value is 65
'B' ascii value is 66
*/

function(s) {
        const result = [];
    let currentNumber = 0;
    let isNumber = false;
    for (const char of s) {
        const charCode = char.charCodeAt(0);
        if (charCode >= 48 && charCode <= 57) {
            currentNumber = currentNumber * 10 + (charCode - 48);
            isNumber = true;
        } else {
            if (isNumber) {
                result.push(currentNumber);
                currentNumber = 0;
                isNumber = false;
            }
        }
    }
    if (isNumber) {
        result.push(currentNumber);
    }
    return result;
};
