// function breakTheText() {
//   var h1 = document.querySelector("h1");
//   var h1Text = h1.textContent;

//   var splittedText = h1Text.split("");

//   var clutter = "";

//   splittedText.forEach(function (elem) {
//     clutter += `<span>${elem}</span>`;
//   });

//   h1.innerHTML = clutter;
// }

// breakTheText();

// // GSAP CODE START

// gsap.from("h1 span", {
//   y: 60,
//   opacity: 0,
//   duration: 0.9,
//   delay: 0.5,
//   stagger: 0.2, // ye span tag ko ake ake ker ke chalye ga.
//   // stagger ki value -> + positive chale ga, - nagative chale ga.
// });

function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach(function (elem, idx) {
    if (idx < halfValue) {
      clutter += `<span class="a">${elem}</span>`;
    } else {
      clutter += `<span class="b">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();
// .a sirf Name prince ko he chalaye ga.
gsap.from("h1 .a", {
  y: 90,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15, //yaha stagger ki value + mai hai
  opacity: 0,
});

// .b sirf Name prince ko he chalaye ga.
gsap.from("h1 .b", {
  y: 90,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15, //yaha stagger ki value - mai hai
  opacity: 0,
});
