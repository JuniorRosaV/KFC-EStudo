let menu_sec = document.getElementById("menu-sec");
let left_arrow = document.getElementById("left-arrow");
let right_arrow = document.getElementById("right-arrow");

right_arrow.addEventListener('click', () => {
  menu_sec.scrollLeft += 115;
});

left_arrow.addEventListener('click', () => {
  menu_sec.scrollLeft -= 115;
});

document.addEventListener('wheel', function(event) {
  if (event.ctrlKey) {
      event.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && (event.key === '+' || event.key === '-')) {
      event.preventDefault();
  }
});

let videos = document.getElementsByTagName("video")[0]; 
let plays = document.getElementsByClassName("play")[0];
let pauses = document.getElementsByClassName("pause")[0];
let screens = document.getElementsByClassName("screen")[0];

plays.addEventListener('click', () => {
  videos.play();
  plays.style.display = "none"; 
  screens.style.display = "none";
  pauses.style.display = "flex";
})

pauses.addEventListener('click', () => {
  videos.pause();
  plays.style.display = "flex";
  screens.style.display = "flex"; 
  pauses.style.display = "none";
})

videos.addEventListener('ended', () => {
  plays.style.display = "flex";
  screens.style.display = "flex"; 
  pauses.style.display = "none";
})

const interval = 3000;

const dataload = () => {
  const sec_title = document.getElementById("sec-title");
  const h6_dot = document.getElementsByTagName("h6");

  setTimeout(() => {
    sec_title.innerHTML = "NEGOCIAR, <br> MENU, <br> CAMPANHA.";
    h6_dot[1].classList.add("head-dots-main");
    h6_dot[2].classList.remove("head-dots-main");
    h6_dot[3].classList.remove("head-dots-main");
    h6_dot[4].classList.remove("head-dots-main");
  }, interval);

  setTimeout(() => {
    sec_title.innerHTML = "DESCONTO? <br> AQUI VOCÊ<br> TEM!";
    h6_dot[1].classList.remove("head-dots-main");
    h6_dot[2].classList.add("head-dots-main");
    h6_dot[3].classList.remove("head-dots-main");
    h6_dot[4].classList.remove("head-dots-main");
  }, interval * 2);

  setTimeout(() => {
    sec_title.innerHTML = "ESPAÇO <br> PARA <br> VEGANO!";
    h6_dot[1].classList.remove("head-dots-main");
    h6_dot[2].classList.remove("head-dots-main");
    h6_dot[3].classList.add("head-dots-main");
    h6_dot[4].classList.remove("head-dots-main");
  }, interval * 3);

  setTimeout(() => {
    sec_title.innerHTML = "COM O APLICATIVO, <br> OBTENHA CUPONS!";
    h6_dot[1].classList.remove("head-dots-main");
    h6_dot[2].classList.remove("head-dots-main");
    h6_dot[3].classList.remove("head-dots-main");
    h6_dot[4].classList.add("head-dots-main");
  }, interval * 4);
}

setInterval(dataload, 12000);
dataload();

const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', () => {
    const icons = menuIcon.querySelectorAll('i');
    icons[0].classList.toggle('d-none');
    icons[1].classList.toggle('d-none');
});


const menu_icon= document.getElementById("menu-icon");
const nav_ul_list = document.getElementById("nav-ul-list");

menu_icon.addEventListener('click', () =>{
  menu_icon.classList.toggle('humburger');
  nav_ul_list.classList.toggle('menu-ul-list-java');
})