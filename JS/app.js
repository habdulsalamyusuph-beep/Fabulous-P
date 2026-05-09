/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  loader.style.display = "none";

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

  menu.classList.toggle("show");

});


/* =========================
   DARK MODE
========================= */

const darkMode = document.getElementById("darkMode");

/* Load saved theme */

if(localStorage.getItem("theme") === "dark"){

  document.body.classList.add("dark");

}

/* Toggle dark mode */

darkMode.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    localStorage.setItem("theme", "dark");

  }

  else{

    localStorage.setItem("theme", "light");

  }

});


/* =========================
   TYPING EFFECT
========================= */

const typing = document.querySelector(".typing");

const words = [

  "Data Analysis",

  "Web Developer",

  "Graphic Designer",

  "Project Management"

];

let wordIndex = 0;

let charIndex = 0;

function typeEffect(){

  if(charIndex < words[wordIndex].length){

    typing.textContent += words[wordIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  }

  else{

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typing.textContent = words[wordIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  }

  else{

    wordIndex++;

    if(wordIndex >= words.length){

      wordIndex = 0;

    }

    setTimeout(typeEffect, 500);

  }

}

typeEffect();


/* =========================
   PROJECT FILTER
========================= */

function filterProjects(type){

  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {

    if(type === "all"){

      card.style.display = "block";

    }

    else if(card.classList.contains(type)){

      card.style.display = "block";

    }

    else{

      card.style.display = "none";

    }

  });

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    const sectionHeight = section.clientHeight;

    if(scrollY >= sectionTop){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){

      link.classList.add("active");

    }

  });

});


/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(scrollY > 300){

    topBtn.style.display = "block";

  }

  else{

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

});


/* =========================
   FORM SUCCESS MESSAGE
========================= */

const form = document.querySelector("form");

const success = document.getElementById("success");

form.addEventListener("submit", () => {

  success.innerHTML = "Message sent successfully!";

  success.style.color = "#00bcd4";

});


/* =========================
   CLOSE MOBILE MENU
========================= */

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    menu.classList.remove("show");

  });

});