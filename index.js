const img = document.getElementById("img");
const containerForImage = document.getElementById("imgctnr");
var isBigger = false;

document.addEventListener("DOMContentLoaded", function () {
  containerForImage.addEventListener("click", function () {
    if (isBigger) {
      img.style = "";
      img.className = "small";

      isBigger = false;
    } else {
      img.style.width = "auto";
      img.style.height = "auto";
      isBigger = true;
    }
  });
});
