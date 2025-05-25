document.addEventListener("DOMContentLoaded", () => {
  const newpostbtn = document.getElementById("new_write_btn");
  const postcontainer = document.getElementById("post_container");

  newpostbtn.addEventListener("click", () => {
    postcontainer.src = "post.html";
    postcontainer.style.display = "block";
  });
});
