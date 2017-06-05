function equals(got, expected) {
  if(got === expected) {
    console.log("✔︎ Passed");
    console.log();
  } else {
    console.log("𝙭 Failed");
    console.log("    Expected: " + expected);
    console.log("    But got:  " + got);
    console.log();
  }
}

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus', 'needle'];
var haystack2 = ['glass', 'needle'];
var haystack3 = ['pony', 'water', 'keyboard'];

/*
Instructions:

Take the following `findNeedle` function and extend it so that it:
- Does not return a single number, but an array of all the positions that contrain "needle"
- Returns an empty array (`[]`) when there is no needle in the haystack

Be sure to follow TDD:
1. Write your unit tests first and let them fail
2. Implement the behaviour and let the tests pass
*/

function findNeedle(haystack) {
  for(var i = 0; i < haystack.length; i++) {
    if(haystack[i] === "needle") {
      return i;
      
    }
  }
}

// equals(findNeedle(haystack1)[0], 3);
// equals(findNeedle(haystack2)[1], 5);
// equals(findNeedle(haystack1)[1].length , 5);

test('should return the haystack1', function(){
    expect(findNeedle(haystack1)).toBe(3);
})

test('should return haystack2', function(){
    expect(findNeedle(haystack2)).toBe(1);
})

test('should return haystack3', function(){
    expect(findNeedle(haystack3)).toBe();
})
