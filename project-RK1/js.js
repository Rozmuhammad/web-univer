const player = new Plyr("#player");

const block1 = document.getElementsByClassName("player-1")[0];
const but1 = document.getElementsByClassName("button-1")[0];
const but2 = document.getElementsByClassName("button-2")[0];
const but3 = document.getElementsByClassName("button-3")[0];

const stop = document.getElementsByClassName("stop-video")[0];
var element = document.getElementById("player");

but1.addEventListener("click", () => {
  if (block1.style.display === "none" || block1.style.display === "") {
    block1.style.display = "flex";
    stop.style.display = "block";
    var element = document.getElementById("player");
    element.src = "BMW M8 Gran Coupe Venom - Wild M8 by Ramon Performance.mp4";
    element.poster = "https://i.ytimg.com/vi/NfnQ8gQlOIA/maxresdefault.jpg";
  }
});
but2.addEventListener("click", () => {
  if (block1.style.display === "none" || block1.style.display === "") {
    block1.style.display = "flex";
    stop.style.display = "block";
    var element = document.getElementById("player");
    element.src = "2021 Lamborghini Urus - Fastest SUV from MANSORY!.mp4";
    element.poster = "https://i.ytimg.com/vi/NYlkgd8a4Uc/maxresdefault.jpg";
  }
});
but3.addEventListener("click", () => {
  if (block1.style.display === "none" || block1.style.display === "") {
    block1.style.display = "flex";
    stop.style.display = "block";
    var element = document.getElementById("player");
    element.src =
      "2022 Rolls Royce Cullinan Black Badge by MANSORY - Perfect SUV in detail.mp4";
    element.poster = "https://i.ytimg.com/vi/G8_6p08DpCk/maxresdefault.jpg";
  }
});

stop.addEventListener("click", () => {
  if (block1.style.display === "flex" || block1.style.display === "") {
    if (element.src === "") {
    } else {
      element.src = "";
    }
    block1.style.display = "none";
    stop.style.display = "none";
  }
});
