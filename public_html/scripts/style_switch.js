var current_style = null;

const changeStyle = (new_style) => {
  if (new_style === current_style) {
    return;
  }
  console.log(`Applying style-${new_style}`);
  document.getElementById("style-" + new_style).rel = "stylesheet";
  if (current_style !== null) {
    document.getElementById("style-" + current_style).rel =
      "alternate stylesheet";
  }

  current_style = new_style;
  localStorage.setItem("current_style", new_style);
};

const toggleStyle = () => {
  changeStyle(current_style === "dark" ? "light" : "dark");
};

window.onload = function () {
  const style = localStorage.getItem("current_style") ?? "dark";
  changeStyle(style);
  document.getElementById("body").classList.remove("no-display");
};
