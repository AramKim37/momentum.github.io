const paragraph = [
  {
    text: "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  {
    text: "it is kind of fun to do the impossible.",
    author: "Walt Disney",
  },
  {
    text: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    text: "I've failed over and over and over again in my life and that is why I secceed",
    author: "Michael Jordan",
  },
  {
    text: "But I know, somehow, that only when it is dark enough can you see the stars.",
    author: "Martin luther King, Jr",
  },
];

const text = document.querySelector(".paragraph span:first-child");
const author = document.querySelector(".paragraph span:last-child");
const randomText = paragraph[Math.floor(Math.random() * paragraph.length)];

text.innerText = randomText.text;
author.innerText = randomText.author;
