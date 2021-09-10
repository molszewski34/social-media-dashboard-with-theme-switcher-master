const colorSwitch = document.getElementById("style__switcher");

colorSwitch.addEventListener("click", checkMode);

function checkMode() {
    if (colorSwitch.checked) {
      darkModeOn();
    } else {
      darkModeOff();
    }
  }


  function darkModeOn() {
    document.body.classList.add("dark_mode");
  }
  
  function darkModeOff() {
    document.body.classList.remove("dark_mode");
  }