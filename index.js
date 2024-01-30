const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   let sentenceSeparated = tutorials.map((item) => {
//     return item.split(" ")
//   });
//   let capital = sentenceSeparated.map((item2) => {
//     item2.map((word) => {
//       return (item2[0].toUpperCase() + item2.slice(1));
//     });
//   })
//   return capital;
// }

// console.log(titleCased());

// // let newArray1 = tutorials.map((item) => {

// // })






const titleCased = () => {
  const separated = tutorials.map((line) => line.split(" "))
  const capitalizeSplit = separated.map(line2 => line2.map((words) => words[0].toUpperCase() + words.slice(1)))
  const completeSentences = capitalizeSplit.map((line) => {
    return line.join(" ");
  });
  return (completeSentences);
}

// titleCased();






