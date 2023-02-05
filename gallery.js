let openedImg = 0;
let selectedImg = 0;

//<img class="thumbsContainer" src="img/thumbs2/1.jpg" alt=""></img>
const removeThumbs = () => {
  document.getElementById("thumbsContainer").innerHTML = "";
  //   document
  //     .getElementById("thumbsContainer")
  //     .removeChild(document.getElementsByClassName("imageContainer"));
};

const selectThumb = (i) => {
  if (selectedImg !== i) {
    if (selectedImg !== 0) {
      document
        .getElementById(`imgContainer${selectedImg}`)
        .classList.remove("selected");
    }
    document.getElementById(`imgContainer${i}`).classList.add("selected");
    selectedImg = i;
  }
};

const openImage = (i) => {
  document
    .getElementById("biggerImageBackground")
    .setAttribute("style", "display:block");

  document.getElementById("bigImg").setAttribute("src", `img/images/${i}.jpg`);
  document
    .getElementById("biggerImgFrame")
    .setAttribute("style", "display:block");
  document.getElementById("thumbsContainer").classList.add("thumbsContainer2");
  document.getElementById("body").classList.add("body2");
  openedImg = i;
  checkButtonsAvailability();
};

const closeImage = () => {
  document
    .getElementById("biggerImageBackground")
    .setAttribute("style", "display:none");
  document
    .getElementById("biggerImgFrame")
    .classList.add("biggerImgFrameClosing");
  setTimeout(function close() {
    document
      .getElementById("biggerImgFrame")
      .setAttribute("style", "display:none");
  }, 1000);
  setTimeout(function close2() {
    document
      .getElementById("biggerImgFrame")
      .classList.remove("biggerImgFrameClosing");
  }, 1000);
  document
    .getElementById("thumbsContainer")
    .classList.remove("thumbsContainer2");
  document.getElementById("body").classList.remove("body2");
  openedImg = 0;
};

/////////////////close BigImg///////////////////////
const box = document.getElementById("biggerImgFrame");
document.addEventListener("click", function clickOutsideImg(event) {
  if (openedImg !== 0) {
    if (!box.contains(event.target)) {
      closeImage();
    }
  }
});

/////////////////Next Image Func.////////////////////
const goNext = () => {
  if (openedImg !== 40) {
    openImage(openedImg + 1);
  }
};

/////////////////Previous Image Func.////////////////////
const goPrevious = () => {
  if (openedImg !== 1) {
    openImage(openedImg - 1);
  }
};

///////////////check Buttons Availability///////////
const checkButtonsAvailability = () => {
  if (openedImg == 1) {
    document.getElementById("leftButton").setAttribute("style", "display:none");
    document
      .getElementById("rightButton")
      .setAttribute("style", "display:block flex");
  } else {
    if (openedImg == 40) {
      document
        .getElementById("rightButton")
        .setAttribute("style", "display:none");
      document
        .getElementById("leftButton")
        .setAttribute("style", "display:block flex");
    } else {
      document
        .getElementById("leftButton")
        .setAttribute("style", "display:block flex");
      document
        .getElementById("rightButton")
        .setAttribute("style", "display:block flex");
    }
  }
};

const fillWithBigThumbs = () => {
  removeThumbs();
  for (let i = 1; i <= 40; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.className = "imgContainer";
    imageContainer.id = `imgContainer${i}`;
    imageContainer.setAttribute("onclick", `selectThumb(${i})`);
    imageContainer.setAttribute("ondblclick", `openImage(${i})`);

    document.getElementById("thumbsContainer").appendChild(imageContainer);

    let image = document.createElement("img");
    image.src = `img/thumbs1/${i}.jpg`;
    image.className = "imgThumb";
    document.getElementById(`imgContainer${i}`).appendChild(image);
  }
};

const fillWithSmallThumbs = () => {
  removeThumbs();
  for (let i = 1; i <= 40; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.className = "imgContainer";
    imageContainer.id = `imgContainer${i}`;
    imageContainer.setAttribute("onclick", `selectThumb(${i})`);
    imageContainer.setAttribute("ondblclick", `openImage(${i})`);

    document.getElementById("thumbsContainer").appendChild(imageContainer);

    let image = document.createElement("img");
    image.src = `img/thumbs2/${i}.jpg`;
    image.className = "imgThumb";
    document.getElementById(`imgContainer${i}`).appendChild(image);
  }
};

const bodyWidth = document.getElementById("body").offsetWidth;
if (bodyWidth >= 700) {
  fillWithBigThumbs();
} else {
  fillWithSmallThumbs();
}

const resize = () => {
  // console.log("now!");
  let bodyWidth = document.getElementById("body").offsetWidth;
  if (bodyWidth >= 700) {
    fillWithBigThumbs();
  } else {
    fillWithSmallThumbs();
  }
};

window.addEventListener("resize", resize);
