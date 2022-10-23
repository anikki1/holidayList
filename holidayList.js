document.addEventListener('DOMContentLoaded', () => {
const nav = document.getElementById('navigation')
nav.innerHTML = '<ul> <li> <a href="index.html"> Home </a> </li> <li> <a href="profile.html"> Profile </a></li> <li> <a href="list.html"> List </a></li> <li> <a href="groups.html"> Groups </a></li>  <li> <a href="settings.html"> Settings </a> </li></ul>'

const images = ['/media/butternut.jpg', '/media/dogs.jpg', '/media/hanukkah.jpg', '/media/holiday.jpg', '/media/snowman.jpg', '/media/whiteElephant.jpg']
let imageIndex = 0

let imgArray = []


const carousel = document.getElementsByClassName('carousel')[0] 
images.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    img.className = 'carouselPic'
    imgArray.push(img)
    carousel.appendChild(img)
    img.style = 'left: 800px'
})

imgArray[0].style = 'left: 10px'



/*showCarousel()*/



const next = document.getElementById('next')
next.onclick = function() {
    if (imageIndex < images.length - 1) {
        showCarousel(true)
    } }


const previous = document.getElementById('previous')
previous.onclick = function () {
    if (imageIndex > 0) {
        showCarousel(false)
    }
}


function showCarousel (right) {
 //   carousel.innerHTML = `<img class="carouselPic" src="${images[imageIndex]}">` //
        imgArray[imageIndex].style = 'left: 800px'
        imageIndex+= (right ? 1 : -1)
        let currentLeft = 10
        
        imgArray[imageIndex].style = `left: ${currentLeft}`
        
       
}




})


