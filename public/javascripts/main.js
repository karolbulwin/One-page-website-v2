(function main() {
  function addOpacityAfterScroll() {
    if (document.documentElement.scrollTop > 16) {
      document.querySelector('nav').classList.add('nav-opacity');
      document.querySelector('nav').classList.remove('py-3');
    }
  }
  function removeOpacityAfterScroll() {
    document.querySelector('nav').classList.remove('nav-opacity');
    document.querySelector('nav').classList.add('py-3');
  }
  function changeOpacityOnNavbar() {
    if (document.documentElement.scrollTop > 16) {
      addOpacityAfterScroll();
    } else {
      removeOpacityAfterScroll();
    }
  }
  window.onscroll = () => { changeOpacityOnNavbar(); };

  document.querySelector('nav').onmouseover = () => { removeOpacityAfterScroll(); };
  document.querySelector('nav').onmouseout = () => { addOpacityAfterScroll(); };
  document.querySelector('nav').ontouchstart = () => { removeOpacityAfterScroll(); };

  document.body.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse');
  });
  document.body.addEventListener('keydown', () => {
    document.body.classList.remove('using-mouse');
  });

  document.querySelectorAll('.btn-back').forEach((btn) => {
    btn.addEventListener('click', () => {
      window.history.back();
    });
  });
}());
