const arrow = document.querySelector(".arrow-wrapper");
arrow.addEventListener("click", test);

const share = document.querySelector(".share-wrapper");
// share.addEventListener("click", test);

function test() {
  arrow.classList.toggle("overflow-hidden");
  share.classList.toggle("display-none");
  console.log("I was clicked");
}
