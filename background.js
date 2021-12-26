const backgroundImg = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const len = backgroundImg.length;
const randomBackgroundImg = backgroundImg[Math.floor(Math.random() * len)];

const img = document.createElement("img");
img.src = `img/${randomBackgroundImg}`;

document.body.appendChild(img);
