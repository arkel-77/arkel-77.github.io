var nav_menu_open = false;

const toggleNavMenu = () => {
  const apply = (elements, fn) => {
    const len = elements.length;
    for (var i = 0; i < len; ++i) {
      fn(elements.item(i));
    }
  };

  if (!nav_menu_open) {
    apply(document.getElementsByClassName("navbar-page-list"), (element) => {
      element.style.display = "block";
    });
  } else {
    apply(document.getElementsByClassName("navbar-page-list"), (element) => {
      element.style.display = "";
    });
  }
  nav_menu_open = !nav_menu_open;
};
