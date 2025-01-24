let btnMenu = document.querySelector('#menu-btn')
let navlink = document.querySelector('.nav-links')
btnMenu.addEventListener('click', ()=>{
   btnMenu.classList.toggle('bx-x')
   navlink.classList.toggle('active')
})
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
   section.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id')
      if (top >= offset && top < offset+height) {
         navLinks.forEach(links => {
            links.classList.remove('active')
            document.querySelector('header nav a[href*='+id+']').classList.add('active')
         })
      }
   })
   let header = document.querySelector('header')
   header.classList.toggle('sticky', window.scrollY > 100)
}
 ScrollReveal({ 
    reset: true,
    duration: 2000,
    distance: '100px',
    delay: 50
  });
  ScrollReveal().reveal('.home-content,.heading', { origin: 'top'});
  ScrollReveal().reveal('.home-img, form', { origin: 'bottom' });
  ScrollReveal().reveal('.about-img, .program-skill', { origin: 'left'});
  ScrollReveal().reveal('.about-content,.design-skill', { origin: 'right'});