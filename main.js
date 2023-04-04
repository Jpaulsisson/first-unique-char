// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

const string1 = 'leetcode';
const string2 = 'loveleetcode';
const string3 = 'aabb';


/////// first attempt /////////
function firstUniqueChar(string) {
  let answer = -1;
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {         ///This was fun. Solved.
      return answer = i;                                                             
    }
  } return answer;
}


console.log(firstUniqueChar(string1));
console.log(firstUniqueChar(string2));
console.log(firstUniqueChar(string3));