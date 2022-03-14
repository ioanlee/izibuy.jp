const items = document.querySelectorAll(".faq button");

function toggleAccordion() {
    this.nextElementSibling.classList.toggle('faq__list--open');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));