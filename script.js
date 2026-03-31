const modal = document.querySelector('.modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

openBtn.onclick = () => modal.style.display = 'block';

closeBtn.onclick = () => modal.style.display = 'none';

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};