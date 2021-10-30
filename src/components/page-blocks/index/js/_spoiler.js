document.querySelectorAll('.faq__question').forEach((item) => 
   item.addEventListener('click', () => {
      item.classList.toggle('open');
   })
)
document.querySelectorAll('.booking__item').forEach((item) => 
   item.addEventListener('click', () => {
      item.classList.toggle('open');
   })
)