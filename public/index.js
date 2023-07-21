document.addEventListener('DOMContentLoaded', () => {
    const mobileIcon = document.getElementById('mobile');
    const navBar2 = document.getElementById('navBar2');

    mobileIcon.addEventListener('click', function () {
      if (navBar2.style.display === 'grid') {
        // Si el #navBar2 está visible, lo ocultamos
        navBar2.style.display = 'none';
      } else {
        // Si el #navBar2 está oculto, lo mostramos
        navBar2.style.display = 'grid';
        navBar2.style.position = 'absolute';
        navBar2.style.height = '100vh';
        navBar2.style.width = '100vw';
        navBar2.style.backgroundColor = '#181719';
        navBar2.style.gridTemplateColumns = '1fr';
        navBar2.style.gridTemplateRows = '4em 4em 4em 1fr 1fr';
        navBar2.style.justifyContent = 'center';
        navBar2.style.paddingTop = '10em';
      }
    });
  });