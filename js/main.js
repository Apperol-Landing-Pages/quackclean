  const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('overlay');

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    closeMenu();
  }
});

$(".questions-head").on("click", function () {
    const currentItem = $(this).parent();

    if (currentItem.hasClass("active")) {
        currentItem.removeClass("active");
        currentItem.find(".questions-body").slideUp();
        return;
    }

    $(".questions-element").removeClass("active");
    $(".questions-body").slideUp();

    currentItem.addClass("active");
    currentItem.find(".questions-body").slideDown();
});