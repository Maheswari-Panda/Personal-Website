let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   header.classList.toggle('active');
}
let themToggler = document.querySelector('#them-toggler');
themToggler.onclick = () =>{
   themToggler.classList.toggle('fa-sun');
   if(themToggler.classList.contains('fa-sun')){
      document.body.classList.add('active');
   }
   else{
      document.body.classList.remove('active');
   }
}
