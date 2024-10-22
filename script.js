

// Отримуємо кнопку "Реєстрація" 
let registerBtn = document.querySelector('.registration-icon');

// Навішуємо обробник подій на клік кнопки "Реєстрація"
if (registerBtn) {
    registerBtn.addEventListener("click", function () {
        // Переходимо на сторінку реєстрації
        window.location.assign('registration.html');
    });
}
document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme', this.checked);
  });