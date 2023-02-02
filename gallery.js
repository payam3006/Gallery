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
  document
    .getElementById("biggerImageBackground")
    .classList.add("biggerImageBackground");
  document.getElementById("bigImg").setAttribute("src", `img/images/${i}.jpg`);
  document.getElementById("bigImg").setAttribute("style", "display:block");
  document.getElementById("thumbsContainer").classList.add("thumbsContainer2");
  document.getElementById("body").classList.add("body2");
  document.getElementById("bigImg").classList.add("bigImg");
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
