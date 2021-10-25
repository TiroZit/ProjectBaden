document.querySelectorAll('.tabs__link--leisure').forEach((item) =>
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.tabs__link--leisure').forEach((child) => child.classList.remove('active')
      );
      document.querySelectorAll('.leisure__list').forEach((child) => child.classList.remove('active')
      );
      item.classList.add('active');
      document.getElementById(id).classList.add('active');
   })
);
document.querySelector('.tabs__link--leisure').click();