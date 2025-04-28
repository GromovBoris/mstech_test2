document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const input = document.getElementById("text");
  const submit = document.getElementById("submit");
  const enter = document.getElementById("enter");

  function transparent() {
    const text = input.value;
    const modified = text.split("");
    overlay.innerHTML = "";
    // console.log(modified);

    modified.forEach((el, i) => {
      const span = document.createElement("span");
      span.textContent = el;
      el.trim() === "" ? span.classList.add("empty") : (span.textContent = el);
      overlay.appendChild(span);
    });

    const space = document.createElement("div");
    space.classList.add("space");
    overlay.appendChild(space);
  }

  submit.addEventListener("click", function () {
    enter.remove();
    transparent();
  });

  //   input.addEventListener("input", transparent());

  window.addEventListener("resize", transparent);
});

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident
//         corporis libero veniam exercitationem perferendis ducimus voluptatibus
//         possimus modi nostrum.
