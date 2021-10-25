document.querySelectorAll('.tabs__link--gallery').forEach((item) =>
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.tabs__link--gallery').forEach((child) => child.classList.remove('active1')
      );
      document.querySelectorAll('.leisure__list').forEach((child) => child.classList.remove('active1')
      );
      item.classList.add('active1');
      document.getElementById(id).classList.add('active1');
   })
);
document.querySelector('.tabs__link--gallery').click();