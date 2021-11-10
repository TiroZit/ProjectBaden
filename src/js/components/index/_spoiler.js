document.querySelectorAll('.faq__question').forEach((item) => 
   item.addEventListener('click', () => {
      item.classList.toggle('open');
   })
)
const spoilers = document.querySelectorAll('.booking__item');
for(item of spoilers){
   item.addEventListener('click', function () {
      if(this.classList.contains('open')){
         this.classList.remove('open');
      } else{
         for (el of spoilers){
            el.classList.remove('open');
         }
         this.classList.add('open');
      }
   })
}