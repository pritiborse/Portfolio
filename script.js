const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon')


iconToggle.addEventListener( 'click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener( "click", ()=>{
  navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener( 'click', () =>{
        navbarMenu.classList.remove('active');
    });
})

//change bg header
function scrollHeader(){
    const header = document.getElementById('header');
    this.scrollY >=20 ? header.classList.add('active') : header.classList.remove("active");
}

window.addEventListener("scroll", scrollHeader);

/* hero type effect */
const typed = document.querySelector('.typed');

if(typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed',{
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000
    });
} 

// scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

   sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offetTop - 120;

    let sectionId = section.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
    } else{
        document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link');
    }
   })
}

window.addEventListener( 'scroll', scrollActive);

//resume scroll

const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        }  else {
                document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll', resumeActive );

// for portfolio

let filterItems= document.querySelectorAll('.portfolio_filters li');

function activePortfolio(){
  filterItems.forEach(el => {
    el.classlist.remove('filter-active');
    this.classList.add('filter-active');

  })

} 

filterItems, forEach(el => {
   e1.addEventListener('click',activePortfolio);
})

// mixitup filter portfolio

let mixerPortfolio=mixitup('portfolio_wrap-container',{
    selectors:{
      target:'.portfolio_item'
    },
    animation:{
      duration:300
    }
  })
