//робота меню для мобільних пристроїв
const navSlide = () => {
    const burger = document.getElementById("burger");
    const nav = document.querySelector('.nav_ul');
    const navLinks = document.querySelectorAll('.nav_ul li');

    //відкриття меню
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        //показ посилань у меню
        navLinks.forEach((link, index) => {
        //умова для анімації посилань кожного разу
            if(link.style.animation){
                link.style.animation = '';
                burger.style.color = '';
            } 
            else{
              link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.3}s`;
              burger.style.color = "#E60F0F";  
            }
        });
    });
}
navSlide();

//зміна коліру панелі при прокрутці
window.addEventListener('scroll', function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle('scrolling', window.scrollY > 0); //window.scrollY > 120 - це позиція вікна

  })