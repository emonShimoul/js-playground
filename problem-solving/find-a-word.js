
const sentence = "Hey, the Shimoul Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown shimoul took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was shimoul in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop shimoul software like Aldus PageMaker Shimoul versions of Lorem Ipsum.";

const matches = sentence.match(/shimoul/gi);
const occurances = matches ? matches.length : 0;
console.log("The number of shimoul in the text: " + occurances);

let position = sentence.search(/shimoul/i);
position = position >= 0 ? position : "not found!";
console.log("Position of 1st shimoul: " + position);