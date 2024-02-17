document.querySelectorAll('.service-item').forEach(item => {
  console.log("Test2")
  let currentIndex = 0;
  const images = item.querySelectorAll('.carousel-image');
  const nextButton = item.querySelector('.next');
  const prevButton = item.querySelector('.prev');
  function showImage(index: number) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  }

  nextButton?.addEventListener('click', () => {
    console.log('next')
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  prevButton?.addEventListener('click', () => {
    console.log('[rev]')
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  showImage(currentIndex);
});
