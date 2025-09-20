// Загружаем данные из JSON и подставляем в HTML
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('username').textContent = data.username;
    document.getElementById('tagline').textContent = data.tagline;
    document.getElementById('about').textContent = data.about;
    document.getElementById('avatar').src = data.avatar;

    const portfolioContainer = document.getElementById('portfolio');
    data.portfolio.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = `${item.emoji} ${item.title}`;
      portfolioContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Ошибка загрузки профиля:', error));
