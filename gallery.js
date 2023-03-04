let imgNum = 40;
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
    ///////////////////////////////
    console.log(
      document.getElementById(`imgContainer${i}`).getBoundingClientRect()
    );

    ///////////////Absolute body and document height/////////////////
    // console.log(document.body.offsetHeight);
    // console.log(document.body.scrollHeight);
    // console.log(document.documentElement.clientHeight);
    // console.log(document.documentElement.offsetHeight);
    // console.log(document.documentElement.scrollHeight);
    // console.log(
    //   document.getElementById(`imgContainer${i}`).offsetTop +
    //     document.getElementById(`imgContainer${i}`).offsetHeight
    // );
    ////////////////////ViewPort height/////////////////////////////
    // console.log(window.innerHeight);
    // console.log(
    //   document.getElementById(`imgContainer${i}`).getBoundingClientRect().y +
    //     document.getElementById(`imgContainer${i}`).getBoundingClientRect()
    //       .height
    // );

    //////////////////////////////
    if (
      document.getElementById(`imgContainer${i}`).getBoundingClientRect().y < 0
    ) {
      document.getElementById(`imgContainer${i}`).scrollIntoView(true);
      setTimeout(function () {
        window.scrollBy(0, -100);
      }, 200);
      // window.scrollTo(0, 600);
    }
    ////////////////////Scroll to selected thumb by set bottom of div (false)/////////////////
    if (
      window.innerHeight <
      document.getElementById(`imgContainer${i}`).getBoundingClientRect().y +
        document.getElementById(`imgContainer${i}`).getBoundingClientRect()
          .height
    ) {
      document.getElementById(`imgContainer${i}`).scrollIntoView(false);
      setTimeout(function () {
        window.scrollBy(0, 100);
      }, 200);
    }
    // document.getElementById(`imgContainer${i}`).scrollIntoView(false);
    //////////////////////////////////////////////////////////////////////////////////////
    selectedImg = i;
  } else {
    document
      .getElementById(`imgContainer${selectedImg}`)
      .classList.remove("selected");
    selectedImg = 0;
  }
};

const openImage = (i) => {
  if (i !== 0) {
    document
      .getElementById("biggerImageBackground")
      .setAttribute("style", "display:block");

    document
      .getElementById("bigImg")
      .setAttribute("src", `img/images/${i}.jpg`);
    document
      .getElementById("biggerImgFrame")
      .setAttribute("style", "display:block");
    document
      .getElementById("thumbsContainer")
      .classList.add("thumbsContainer2");
    document.getElementById("body").classList.add("body2");
    openedImg = i;
    checkButtonsAvailability();
  }
};

const closeImage = () => {
  if (openedImg !== 0) {
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
  }
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
  if (openedImg !== imgNum) {
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
    if (openedImg == imgNum) {
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
  for (let i = 1; i <= imgNum; i++) {
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
  for (let i = 1; i <= imgNum; i++) {
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

////////////////////////////Maybe Not Usable!!!//////////////////////
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
////////////////////////////Maybe Not Usable!!!//////////////////////

////////////////////keyboard acts////////////////////////////////
const keyboardAction = (event) => {
  let character = event.key;
  if (character == "ArrowRight" && openedImg !== 0) {
    goNext();
  }
  if (character == "ArrowLeft" && openedImg !== 0) {
    goPrevious();
  }
  if (character == "Enter" && openedImg == 0) {
    openImage(selectedImg);
  }
  if (character == "Escape") {
    closeImage();
  }
  // console.log(character);
};

document.body.addEventListener("keydown", keyboardAction);

////////////////////mouse acts////////////////////////////////
const mouseActionOnOpenedImg = (A) => {
  let scroll = A.deltaY;
  if (scroll < 0 && openedImg !== 0) {
    goNext();
  }
  if (scroll > 0 && openedImg !== 0) {
    goPrevious();
  }
};

const mouseActionOfSelecting = (A) => {
  let scroll = A.deltaY;
  if (selectedImg !== 0 && openedImg == 0) {
    if (scroll < 0 && selectedImg !== imgNum) {
      selectThumb(selectedImg + 1);
    }
    if (scroll > 0 && selectedImg !== 1) {
      selectThumb(selectedImg - 1);
    }
  }
};

const gridContainer = document.getElementById("thumbsContainer");
const frame = document.getElementById("biggerImgFrame");
frame.addEventListener("wheel", mouseActionOnOpenedImg);

//////////////////prevent default scrolling action on grid container////////////////
gridContainer.addEventListener("wheel", preventScroll, { passive: false });

function preventScroll(e) {
  if (selectedImg !== 0) {
    e.preventDefault();
    e.stopPropagation();

    return false;
  }
}
///////////////////////////////////////////////////////////////////////////////////
gridContainer.addEventListener("wheel", mouseActionOfSelecting);

// const scrollToo = () => {
//   console.log("sdncvkjsdcvo");
//   document.getElementById("imgContainer4").scrollIntoView(false);
// };

//////////////////////Touch Event/////////////////////////
const touchFunc = (a) => {
  console.log(a.touches[0]);
};
frame.addEventListener("touchmove", touchFunc);

// window.addEventListener("scroll", function (e) {
//   console.log("scroll", e);
// });
// window.addEventListener("touchstart", function (e) {
//   console.log("touchstart", e);
// });
// window.addEventListener("touchmove", function (e) {
//   console.log("touchmove", e.touches[0]);
// });
// window.addEventListener("touchend", function (e) {
//   console.log("touchend", e);
// });
