let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// 1) We want to gather some information about the individual words and sentences in the above string 'story'. Let’s split the string into individual words and save them in a new array called storyWords.

let storyWords = story.split(' ');

console.log(storyWords); // Some words have the comma attached to them.

// 2) Log how many words there are in this story to the console.

console.log(`There are ${storyWords.length} words in this story.`); // 188 words. Note the use of backticks (and not quotes) when you are using the Template Literal to interpolate strings.

// 3)
// Recap: Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.
// From JS Doc: "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. Syntax: arr.includes(valueToFind[, fromIndex]). Return value: A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified)."

// Test code below. We need to filter out / for elements in the array that cause the callback function, i.e. unnecessaryWords.includes(element), to return 'false' and there does not seem to have an .excludes(element) method. However, the .filter() iteration method only filters out / include elements in the new array that returns 'true' by the callback function. We will test with the Logical not '!' operator. Unary operator that simply inverts the Boolean value.
function func(z) {
  return !unnecessaryWords.includes(z);
}; // if unnecessaryWords does NOT include z, it will return 'false' but the logical not '!' operator will invert it to become 'true'.
console.log(func('TestWord')); // true. Hence, using '!' works.

// Test code:
let unnecessaryWordsInStory = storyWords.filter(
  z => unnecessaryWords.includes(z)
);
console.log(unnecessaryWordsInStory, `The number of unnecessary words in the story is ${unnecessaryWordsInStory.length}.`); // 6 elements of unnecessaryWords filter out from storyWords so 188 - 6 = 182 words in betterWords.

let betterWords = storyWords.filter(
  z => !unnecessaryWords.includes(z)
);
/* 
// The Function Expression method:
let betterWords = storyWords.filter(
  function(word) {
    return !unnecessaryWords.includes(word);
  }
);
*/
console.log(betterWords, `The are ${betterWords.length} words remaining in the story after filtering out the unnessary words.`); // 182 words indeed.

// 4) Below is my original codes for filtering out the overused words and thereafter, counting them. Technically correct but not exactly what the question is asking for. The question asks for the number of times EACH and EVERY (of the three) overused word is used, not the total frequency of all overused words.

let freqOfOverusedWords = storyWords.filter(
  z => overusedWords.includes(z)
);
console.log(`There are ${freqOfOverusedWords.length} overused words in the story.`);

let reallyFreq = 0;
let veryFreq = 0;
let basicallyFreq = 0;

for (word of storyWords) {
  if (word === 'really') {
    reallyFreq++; // NOTE: "reallyFreq += 1" works the same, as demonstrated right below for veryFreq.
  } else if (word === 'very') {
    veryFreq += 1;
  } else if (word === 'basically') {
    basicallyFreq++;
  } 
};
// NOTE: 'else' cannot be used in the last condition and is not required here in any case. The 'else if' statements allow you to have multiple possible outcomes. 'if/else if/else' statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed. Here, the code inside the first 'else if' statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the 'else' statement would have been executed. Since there is no (no need for) 'else' statement here, if none of the conditions evaluate to true, nothing is executed and the loop proceeds to the next iteration.
/*
Difference Between ‘for…in’ and ‘for…of’ looops. Some useful links below:
1) https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements-in-jav
2) https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
3) https://medium.com/better-programming/what-is-the-difference-between-for-in-and-for-of-in-javascript-650952654e9
Quotomg from the above stackoverflow link: "mnemonic: for... of :: arrays :: arrays always have a length, so you can think for.. [nth element] of.. [q elements]. Another mnemonic...for..in..keys === foreign keys === use for...in for keys! As such, use for...of for values."
*/
console.log(`
reallyFreq = ${reallyFreq}
veryFreq = ${veryFreq}
basicallyFreq = ${basicallyFreq}
`);
// Alternative method to log all three variables to the console at one go, using the newline character ( \n ): 
console.log(`reallyFreq = ${reallyFreq} \nveryFreq = ${veryFreq} \nbasicallyFreq = ${basicallyFreq}`);

/*
5) Before getting into the two iteration methods below, I would like to highlight the two ways of extracting the last element of an array / character of a string.
string.length is always 1 more than the last index of the string because of zero-indexing. Hence, the last character will have an index of string.length - 1 and you can access it with string[string.length - 1].
Another lesser known way is to use the .slice() method. From JS Doc: "The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified. Syntax: arr.slice([begin[, end]])"
JS Doc: "begin Optional
Zero-based index at which to begin extraction.
A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence. (HS: Hence, slice(-1) extracts ONLY the last element.)
If begin is undefined, slice begins from index 0.
If begin is greater than the index range of the sequence, an empty array is returned.
end Optional
Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
If end is omitted, slice extracts through the end of the sequence (arr.length).
If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length)."
The .slice() method is often used to slice the elements in an array but since a string is an array of individual characters, we can effectively use it to slice the characters of a string, and in this case, slice the last character by using a negative index as you could in Python, i.e. .slice(-1).
*/
// Test code to demonstrate the use of .slice(-1) for a string array of individual characters:
let z = 'TestWord'
console.log(z.slice(-1)); // 'd'.

// 5A) Method 1:

let sentence1 = 0;

storyWords.forEach(
  word => {
    if (word.slice(-1) === '.' || word[word.length - 1] === '!') {
      sentence1++; // "sentence1 += 1" works the same.
    }
  }
); // Used both the .slice(-1) and string[string.length - 1] methods on purpose to demonstrate the possibilities.
console.log(`There are ${sentence1} sentences in this paragraph.`);

// 5A) Method 2:

let sentence2 = 0;

for (word of storyWords) {
  if (word[word.length - 1] === '!' || word.slice(-1) === '.') {
    sentence2 += 1; // "sentence2++" works the same as in method 1 above.
  }
}
console.log(`There are ${sentence2} sentences in this paragraph.`);

// 6A) Method 1 - Using the Arrow Function syntax. If a function takes zero or multiple parameters, parentheses are required. Both the curly braces and the 'return' keyword cannot be removed because the function is NOT a single-line block.

const counts = (c1, c2, c3, c4, c5) => {
  console.log('Word count: ' + c1); // NOTE: '+' does not add a space like ',' does (right below) so before '+', must add a space after ': '.
  console.log('Sentence count:', c2); // NOTE: ',' will add a space.
  console.log(`reallyFreq = ${c3} \nveryFreq = ${c4} \nbasicallyFreq = ${c5}`);
};
counts(storyWords.length, sentence1, reallyFreq, veryFreq, basicallyFreq)

// 6B) Method 2. Good old Template Literal to interpolate variables into a string.

console.log(`
Word count = ${storyWords.length}
Sentence count = ${sentence1}
reallyFreq = ${reallyFreq}
veryFreq = ${veryFreq}
basicallyFreq = ${basicallyFreq}
`);

// 7) From JS Doc: "The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. Syntax: arr.join([separator]). separator Optional. Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them."

console.log(betterWords.join(' '));
// NOTE: betterWords only removed the unnecessary words. There are still the overused words such as 'really' in the third sentence. This could be the next improvement to be made.

