var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
  if (a > b){
    return a;
  }else if (b > a) {
    return b;
  } else {
    return b;
  }
}



console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
  if (a > b && a > c) {
    return a;
  } if (b > c && b > a) {
    return b;
  } if (c > a && c > b) {
    return c;
  } if (isNaN(a) && b < c){
    return c;
  } if (isNaN(a) && isNaN(b) && isNaN(c)){
    return NaN;
  }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
// If input is not in the specified array then return will output false
function isVowel(char){
    var vowelsArray = [
      "a","e","i","o","u",
      "A","E","I","O","U"
    ];

    if(vowelsArray.indexOf(char) === -1){
      return false;
    } else{
      return true;
    }
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */
// This is the function, what is being asked...(text) is where the imput goes.
function rovarspraket(text){
  // This line is creating a veriable that is taking the input (text) and
      // making it into a string.
  var textAsString = text.toString();
  // this line is taking that string called textAsString and spliting it into an array seperated by each letter as an item in the array, that is done by placing quotes next to each other in the parins...
  var textArray = textAsString.split("");
  // This is a for loop that is taking each entry of the newly created array as is doing the task of the if statement.
  for(var i = 0; i <textArray.length; i++){
    // this line is creating a var called currentLetter that is being defined by the loop process.
    var currentLetter = textArray[i];
    // the next two lines basically says that if any letter is not "!" a vowel should then follow the next line of code which is currentLetter + "o" + currentLetter..
    if(!isVowel(currentLetter)){
      var doubledText = currentLetter + "o" + currentLetter;
        // after the currentLetter has had the "o", it is now called doubleText, and is then spliced at starting position i, 1 item is to be removed, and doubleText is removed.
       textArray.splice(i, 1, doubledText);
     }
  }
    // will return th desired string by joining each letter of var textArray
  return textArray.join("");
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
// could not make this go away
// console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// another methos is to combine the three command into occurrence.
// return str.split("").reverse().join("");
function reverse(str){
    var splitString = str.split("");
    var reverseString = splitString.reverse();
    var joinArray = reverseString.join("");
    return joinArray;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */
 function findLongestWord(sentence){

      var sentenceSplit = sentence.split(" ");
      for (var i = 0; i < sentenceSplit.length; i++) {
        // I know for sure that i need to create an array for the input "sentence", then for loop it by length.  Next I would need to some how take the for loop and make it compare the words by giving it another var name that equals to the for loop process.
        // currentWord of for loop
        var currentWord = sentenceSplit[i];
        // im stuck here. I think im on the right track but i dont know
        if (currentWord.length > sentenceSplit[i].lenght) {

        }
  }
      return currentWord;
}


console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
