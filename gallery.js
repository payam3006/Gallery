//<img class="thumbs" src="img/thumbs2/1.jpg" alt=""></img>
const removeThumbs = () => {
  document.getElementById("thumbs").innerHTML = "";
  //   document
  //     .getElementById("thumbs")
  //     .removeChild(document.getElementsByClassName("imageContainer"));
};

const fillWithBigThumbs = () => {
  removeThumbs();
  for (i = 1; i <= 40; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.className = "imgContainer";
    imageContainer.id = `imgContainer${i}`;
    document.getElementById("thumbs").appendChild(imageContainer);

    let image = document.createElement("img");
    image.src = `img/thumbs1/${i}.jpg`;
    image.className = "imgthumb";
    document.getElementById(`imgContainer${i}`).appendChild(image);
  }
};

const fillWithSmallThumbs = () => {
  removeThumbs();
  for (i = 1; i <= 40; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.className = "imgContainer";
    imageContainer.id = `imgContainer${i}`;
    document.getElementById("thumbs").appendChild(imageContainer);

    let image = document.createElement("img");
    image.src = `img/thumbs2/${i}.jpg`;
    image.className = "imgthumb";
    document.getElementById(`imgContainer${i}`).appendChild(image);
  }
};

const bodyWidth = document.getElementById("body").offsetWidth;
if (bodyWidth >= 600) {
  fillWithBigThumbs();
} else {
  fillWithSmallThumbs();
}

const resize = () => {
  console.log("now!");
  let bodyWidth = document.getElementById("body").offsetWidth;
  if (bodyWidth >= 600) {
    fillWithBigThumbs();
  } else {
    fillWithSmallThumbs();
  }
};

window.addEventListener("resize", resize);
