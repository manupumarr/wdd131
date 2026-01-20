const yearSpan = document.querySelector('#currentyear');
const lastModifiedSpan = document.querySelector('#lastModified');

const today = new Date();
yearSpan.textContent = today.getFullYear();
lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.textContent = '☰';

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    
    if (navigation.classList.contains('open')) {
        hamButton.textContent = '❎';
    } else {
        hamButton.textContent = '☰';
    }
});