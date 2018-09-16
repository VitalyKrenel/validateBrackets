### Problem 
You have an expression containing of different types of brackets. Expression isn't required to contain only brackets - there are may be any other characters.

You have to return `true` if the supplied expression is correct. 
Otherwise, the position of the last unpaired bracket.

Input restrictions: `1 ≤ expression length ≤ 105`

```
Input: []
Output: true

Input: {}[]
Output: true

Input: [()]
Output: true

Input: (())
Output: true

Input: {[]}()
Output: true

Input: {
Output: 1

Input: {[}
Output: 3

Input: foo(bar);
Output: true

Input: foo(bar[i);
Output: 10
```
