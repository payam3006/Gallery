const gridContainer = document.getElementById("gridContainer");
const browseFiles = document.getElementById("browseFiles");
let files = [];

///////////////////////
// const unique = (arr) => [...new Set(arr)];
// console.log(unique([1, 1, 1, 2, 3, 3])); // 1,2,3

browseFiles.onchange = () => {
  let files2 = browseFiles.files;
  files = files.concat(Array.from(files2));

  // files.filter((item, index) => {
  //   return files.indexOf(item) === index;
  // });

  // const uniqueSet = new Set(files);
  const filesNames = [];
  for (let i = 0; i < files.length; i++) {
    filesNames.push(files[i].name);
  }
  console.log(filesNames);
  files = files.filter((file, index) => {
    return filesNames.indexOf(file.name) === index;
  });

  deleteThumbs();
  fillWithThumbs();

  // console.log(new Set([1, 1, "1", "2", "2", "2"]));
  // console.log(uniqueSet);
  // console.log(files);
  // console.log(Array.from(files[3]) == Array.from(files[4]));
  // console.log(Array.from(files[3]));
  console.log(files);
};

const deleteThumbs = () => {
  gridContainer.innerHTML = "";
};

const fillWithThumbs = () => {
  for (let i = 1; i <= files.length; i++) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(files[i - 1]);
    img.classList.add("gridItem");
    img.id = `img${i}`;
    gridContainer.appendChild(img);
  }
};
