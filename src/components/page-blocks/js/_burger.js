const burger = document.querySelector('.burger-menu');
if (burger) {
   const menu = document.querySelector('.main-menu');
   burger.addEventListener("click", function(e) {
      document.body.classList.toggle('lock');
      burger.classList.toggle('open');
      burger.classList.toggle('burger-menu--open');
      menu.classList.toggle('open');
   });
}