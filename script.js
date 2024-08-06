document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".header");
  const titles = document.querySelectorAll(".title");
  const shorts = document.querySelectorAll(".short");
  const profiles = document.querySelectorAll(".profile-img");
  const author_names = document.querySelectorAll(".name");
  const dates = document.querySelectorAll(".date");

  const animated_bgs = document.querySelectorAll(".animated-bg");
  const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

  setTimeout(getData, 1000);

  function getData() {
    headers.forEach(
      (header) => (header.innerHTML = '<img src="game.png" alt="Game Image" />')
    );
    titles.forEach(
      (title) => (title.innerHTML = "Lorem ipsum dolor sit amet.")
    );
    shorts.forEach(
      (short) =>
        (short.innerHTML =
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum?")
    );
    profiles.forEach(
      (profile) =>
        (profile.innerHTML = '<img src="greenish2.png" alt="Profile Image" />')
    );
    author_names.forEach(
      (author_name) => (author_name.innerHTML = "Mr Greenish")
    );
    dates.forEach((date) => (date.innerHTML = "Today"));

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
  }
});
