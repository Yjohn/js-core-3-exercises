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

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus'];
var haystack2 = ['glass', 'needle', ]

/*
Instructions:

Turn the below "find needle" code into a function
that returns the index of "needle" in the given haystack
*/
function findNeedle(words){
for(var i = 0; i < words.length; i++) {
  if(words[i] === "needle") {
    //console.log("Found needle at position " + i);
    return i;
  }
}
}
equals(findNeedle(haystack1), 3);
equals(findNeedle(haystack2), 2);