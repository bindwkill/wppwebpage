const phoneField = document.querySelector(".phoneField");
phoneField.addEventListener("input", event => {
  const number = phoneField.value.split('').filter(num => !(isNaN(num) || num === " "));
  phoneField.value = number.join("");
})