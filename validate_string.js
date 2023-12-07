/*
Given A String check whether on reversal it is the same or not.
Return True if yes otherwise return False. 
Example 1: 
Input:- word = "madam"
Output : true
Explanation:-
madam when reversed is the same as the original one.

Example 2: 
Input:- word = "sharpener"
Output : false
Explanation:-
sharpener when reversed is not the same as the original one.
  
Example 3: 
Input:- word = "abba"
Output : true

Explanation:-
abba when reversed is the same as the original one.
Constraints:

1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.

*/

var isValid = function(s) {
        const reversedString = s.split('').reverse().join('');
    return s === reversedString;
};

