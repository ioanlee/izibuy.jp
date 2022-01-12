let current = document.querySelector('.current');
let photos = document.getElementsByClassName('thumb');
for (let i=0;i<photos.length; i++) {
    photos[i].addEventListener('click',display);
}
function display() {
    let ph = this.getAttribute('src');
    current.setAttribute('src',ph);
}