var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 0,
});

var typed = new Typed("#typed2", {
  stringsElement: "#fasttyped",
  typeSpeed: 0,
});

const primaryButton = document.querySelector("primary");

primaryButton.addEventListener("click", howPrimary());
function howPrimary() {
  console.log("HELLO");
  /*let oldText = document.getElementById("typed-strings");
  oldText.innerHTML = `<p> How did you win the primary? </p>`;
  console.log(oldText);*/
}
