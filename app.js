let buttons = document.querySelectorAll(".prayer-accordion");
let prayersC = document.querySelectorAll(".prayer-container");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("active");

    let prayer = button.nextElementSibling;

    if ("block" == window.getComputedStyle(prayer).display) {
      prayer.style.display = "none";
    } else {
      prayersC.forEach(function (prayerC) {
        prayerC.style.display = "none";
      });
      prayer.style.display = "block";
    }
  });
});
