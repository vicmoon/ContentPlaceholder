const header = document.getElementById("header");
const title = document.getElementById("title");
const short = document.getElementById("short");
const profile = document.getElementById("profile-img");
const author_name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1000);

function getData() {
  header.innerHTML = '<img src="game.png" />';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  short.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam! " +
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum? ";
  profile.innerHTML = '<img src="greenish2.png" alt="" />';
  author_name.innerHTML = "Mr Greenish";
  date.innerHTML = "Today";
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
