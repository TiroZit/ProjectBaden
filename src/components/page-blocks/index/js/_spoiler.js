document.querySelectorAll('.faq__question').forEach((item) => 
   item.addEventListener('click', () => {
      item.classList.toggle('open');
   })
)