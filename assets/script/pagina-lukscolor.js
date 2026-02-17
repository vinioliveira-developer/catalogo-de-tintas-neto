const principal = document.getElementById('imagemPrincipal');
  const cores = document.querySelectorAll('.cor');
  const thumbs = document.querySelectorAll('.thumb');

  cores.forEach(cor => {
    cor.addEventListener('click', () => {
      const img = cor.dataset.img;
      principal.src = img;
    });
  });

  thumbs.forEach(t => {
    t.addEventListener('click', () => {
      principal.src = t.src;
      document.querySelector('.thumb.active')?.classList.remove('active');
      t.classList.add('active');
    });
  });