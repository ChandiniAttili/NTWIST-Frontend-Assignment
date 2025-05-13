// Sortable List Logic
const list = document.getElementById('name-list');
const sortBtn = document.getElementById('sort-btn');

if (list && sortBtn) {
  sortBtn.addEventListener('click', () => {
    const items = Array.from(list.querySelectorAll('li'));
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    list.innerHTML = '';
    items.forEach(item => list.appendChild(item));
  });
} 