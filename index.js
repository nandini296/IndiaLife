const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav-links");
  const navbar = document.querySelector(".right-navbar");
  const navContainer = document.querySelector(".top-container");
  nav.classList.toggle("open");
  navContainer.classList.toggle("open");
  navbar.classList.toggle("open");

  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}

// const writeComment = document.querySelector(".write-comment");
// const subscribe = document.querySelector(".contentBx1");
// subscribe.addEventListener("click", function () {
//   subscribe.classList.toggle("active1");
// });

// writeComment.addEventListener("click", function () {
//   document.querySelector(".content2").classList.add("active2");
// });

const deleteComment = document.querySelector(".times-div");
const shareButton = document.querySelector(".share-btn");
shareButton.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".share-section").classList.toggle("active1");
});

deleteComment.addEventListener("click", function () {
  // this.preventDefault()
  document.querySelector(".delete-container").classList.toggle("active1");
});
