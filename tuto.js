const imgList = document.getElementsByTagName("img");
const topImg = document.getElementsByClassName("topImg");
const infoImg = document.getElementById("infoImg");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const currentPageNumber = document.getElementById("currentPageNumber");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
var currentIndex = 0;
const info = [
  {
    number: 1,
    title: "lorem ipsum1",
    image: "white.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eaque itaque similique odit ad accusamus sint esse eos aut, impedit quas dignissimos nemo distinctio sunt cum, asperiores facere, laborum nisi!",
  },
  {
    number: 2,
    title: "lorem ipsum2",
    image: "white.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eaque itaque similique odit ad accusamus sint esse eos aut, impedit quas dignissimos nemo distinctio sunt cum, asperiores facere, laborum nisi!",
  },
  {
    number: 3,
    title: "lorem ipsum3",
    image: "white.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eaque itaque similique odit ad accusamus sint esse eos aut, impedit quas dignissimos nemo distinctio sunt cum, asperiores facere, laborum nisi!",
  },
];
for (let i = 0; i < topImg.length; i++) {
  const element = topImg[i];
  element.addEventListener("mouseup", () => {
    window.location.href = "info.html";
  });
}
function changEverything(newIndex) {
  infoImg.src = info[newIndex].image;
  infoTitle.innerHTML = info[newIndex].title;
  infoText.innerHTML = info[newIndex].description;
  currentPageNumber.innerHTML = info[newIndex].number;
}
changEverything(currentIndex);
leftArrow.addEventListener("mouseup", () => {
  if (currentIndex == 0) {
    currentIndex = info.length - 1;
  } else {
    currentIndex--;
  }
  changEverything(currentIndex);
});
rightArrow.addEventListener("mouseup", () => {
  if (currentIndex == info.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  changEverything(currentIndex);
});
