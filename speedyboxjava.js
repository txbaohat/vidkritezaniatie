const slider = document.querySelector('.slider'); // Контейнер зображень
const nextButton = document.getElementById('next-btn'); // Кнопка для перемикання вперед
const prevButton = document.getElementById('prev-btn'); // Кнопка для перемикання назад

let currentIndex = 0; // Поточний індекс видимого зображення (починається з 0)

// Додаємо обробник подій для кнопки "Вперед"
nextButton.addEventListener('click', () => {
  const images = slider.querySelectorAll('img'); // Отримуємо всі зображення
  const totalImages = images.length; // Кількість зображень у слайдері

  currentIndex = (currentIndex + 1) % totalImages; // Збільшуємо індекс (повертаємо до 0, якщо досягли кінця)

  const offset = -currentIndex * 700; // Розраховуємо зміщення в пікселях (300px = ширина одного зображення)
  slider.style.transform = `translateX(${offset}px)`; // Зсуваємо слайдер
});

// Додаємо обробник подій для кнопки "Назад"
prevButton.addEventListener('click', () => {
  const images = slider.querySelectorAll('img'); // Отримуємо всі зображення
  const totalImages = images.length; // Кількість зображень у слайдері

  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Зменшуємо індекс (повертаємо до останнього, якщо нижче 0)

  const offset = -currentIndex * 700; // Розраховуємо зміщення в пікселях
  slider.style.transform = `translateX(${offset}px)`; // Зсуваємо слайдер
});