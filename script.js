  const modeBtn = document.querySelector('.mode-btn');
  const darkModeTargets = document.querySelectorAll('.navbar, nav a, body, .tag, .card, .card li, .feature-area, p, h2, .feature-box, .about, .info-card, .stat-item h3, .trusted-badge');

  modeBtn.addEventListener('click', () => {
    darkModeTargets.forEach(el => el.classList.toggle('dark-mode'));

    if (darkModeTargets[0].classList.contains('dark-mode')) {
      modeBtn.textContent = '☀️';
    } else {
      modeBtn.innerHTML = '<i class="fa-solid fa-moon" style="color: rgb(245, 158, 11);"></i>';
    }
  });
const collapsedGroup = document.getElementById('sb-collapsed-group');
const chatWindow = document.getElementById('sb-chat-window');
const closeBtn = document.getElementById('sb-close');

collapsedGroup.addEventListener('click', () => {
    chatWindow.classList.add('active');
    collapsedGroup.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    chatWindow.classList.remove('active');
    collapsedGroup.style.display = 'flex';
});