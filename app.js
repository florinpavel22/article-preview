const shareIcon = document.querySelector('.share-icon');
const closeShare = document.querySelector('.close-icon');
const publisher = document.querySelector('.publisher-info');
const shareSection = document.querySelector('.social-media');

shareIcon.addEventListener('click', () => {
    publisher.classList.toggle('hidden');
    shareSection.classList.toggle('open');
});

closeShare.addEventListener('click', () => {
    publisher.classList.remove('hidden');
    shareSection.classList.remove('open');
});