// document.addEventListener("DOMContentLoaded", function () {
//   const overlay = document.getElementById("overlay");
//   const input = document.getElementById("text");
//   const submit = document.getElementById("submit");
//   const enter = document.getElementById("enter");

//   //   function generate(text) {
//   //     const words = text.split(" ");
//   //     overlay.innerHTML = "";
//   //     // alert(words.length);

//   //     let line = document.createElement("div");
//   //     line.className = "line";
//   //     overlay.appendChild(line);

//   //     const overlayWidth = overlay.offsetWidth;

//   //     let lastText = null;
//   //     let lastSpace = null;

//   //     for (let i = 0; i < words.length; i++) {
//   //       const spanText = document.createElement("span");
//   //       spanText.className = "text";
//   //       spanText.textContent = words[i] + " ";

//   //       const spanSpace = document.createElement("span");
//   //       spanSpace.className = "space";
//   //       spanSpace.textContent = " ";

//   //       if (
//   //         line.offsetWidth + spanText.offsetWidth + spanSpace.offsetWidth >=
//   //         overlayWidth
//   //       ) {
//   //         if (lastText) {
//   //           line.removeChild(lastText);
//   //           if (lastSpace) {
//   //             line.removeChild(lastSpace);
//   //           }
//   //           lastText.textContent = lastText.textContent.trimEnd();
//   //         }
//   //         let line = document.createElement("div");
//   //         line.className = "line";
//   //         overlay.appendChild(line);
//   //         // continue;
//   //       } else {
//   //         line.appendChild(spanText);
//   //         line.appendChild(spanSpace);

//   //         lastText = spanText;
//   //         lastSpace = spanSpace;
//   //       }

//   //   if (i < words.length - 1) {
//   //     wordSpan.textContent += " ";
//   //   }

//   //   if (i < words.length - 1) {
//   //     const spacer = document.createElement("span");
//   //     spacer.className = "space";
//   //     overlay.appendChild(spacer);
//   //   }
//   // }
//   //   }

//   function generate(text) {
//     const words = text.split(" ");
//     overlay.innerHTML = "";
//     // alert(words.length);

//     let line = (document.createElement("div").className = "line");

//     for (let i = 0; i < words.length; i++) {
//       const wordSpan = document.createElement("span");
//       wordSpan.className = "text";
//       wordSpan.textContent = words[i];
//       overlay.appendChild(wordSpan);

//       if (i < words.length - 1) {
//         wordSpan.textContent += " ";
//       }

//       if (i < words.length - 1) {
//         const spacer = document.createElement("span");
//         spacer.className = "space";
//         overlay.appendChild(spacer);
//       }
//     }
//   }

//   submit.addEventListener("click", function () {
//     generate(input.value);
//     enter.remove();
//   });

//   //   window.addEventListener("resize", generateTextElements(input.value));
// });
//

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

  // window.addEventListener("resize", transparent);
});

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident
// corporis libero veniam exercitationem perferendis ducimus voluptatibus
// possimus modi nostrum.
