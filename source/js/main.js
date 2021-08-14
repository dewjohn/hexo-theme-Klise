(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  let elem = document.querySelectorAll('figure.highlight')
  elem.forEach(function(item){
    let langName = item.getAttribute('class').split(' ')[1]
    if (langName === 'plain' || langName === undefined) langName = 'Code'
    item.setAttribute('data-lang',langName);
  })

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();

