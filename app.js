const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#toogle")
const body = document.querySelector("body")
const Links = document.querySelectorAll("#link")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("black")
})

Links.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
   hamburger.classList.toggle("black")
  })
})

