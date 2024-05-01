let bg = document.getElementById("bg");
let bird = document.getElementById("bird")
let forest = document.getElementById("forest")
let foliage = document.getElementById("foliage")
let text = document.getElementById("text")

let rate = {
  bg: 0.5,
  bird : 0.5,
  forest : 0.15,
  foliage : 0.15,
  text: 1,
}

const handleScroll = () => {
  let scrollDistance = window.scrollY;

  bg.style.top = scrollDistance * rate.bg + 'px';
  bird.style.left = -scrollDistance * rate.bird + 'px';
  forest.style.top = -scrollDistance * rate.forest + 'px';
  foliage.style.top = scrollDistance * rate.foliage + 'px';
  text.style.top = scrollDistance * rate.text + 'px';
}

window.addEventListener('scroll', handleScroll);