document.addEventListener('DOMContentLoaded', () => {
const nav = document.getElementById('navigation')
nav.innerHTML = '<ul> <li> <a href="index.html"> Home </a> </li> <li> <a href="profile.html"> Profile </a></li> <li> <a href="list.html"> List </a></li> <li> <a href="groups.html"> Groups </a></li>  <li> <a href="settings.html"> Settings </a> </li></ul>'

const images = ['/media/butternut.jpg', '/media/dogs.jpg', '/media/hanukkah.jpg', '/media/holiday.jpg', '/media/snowman.jpg', '/media/whiteElephant.jpg']
let imageIndex = 0





const carousel = document.getElementsByClassName('carousel')[0] 
showCarousel()




const next = document.getElementById('next')
next.onclick = function() {
    if (imageIndex < images.length - 1) {imageIndex++
        showCarousel()
    
    } }
const previous = document.getElementById('previous')
previous.onclick = function () {
    if (imageIndex > 0) {
        imageIndex--
        showCarousel()
    }
}


function showCarousel () {
    carousel.innerHTML = `<img class="carouselPic" src="${images[imageIndex]}">`


}





})

