const dots = document.querySelector(".label-dots");

dots.addEventListener("click", function () {
  console.log(dots);
  document.querySelector(".label-dots").classList.toggle("active1");
  document.querySelector(".contentBx-dots").classList.toggle("active1");
});

const textAreaComment = document.querySelector(".comment-textarea");
textAreaComment.addEventListener("click", function () {
  console.log(textAreaComment);
  document.querySelector(".comment-main-container").style.borderColor =
    "#a4127e";
});
