console.log("hello");

const button = document.querySelector("button");
console.log(button);

let root = document.getElementById("root");
root.addEventListener("click", (event) => {
  alert(`bubbling ${event.currentTarget.tagName} ${event.target.tagName}`);
});

root.addEventListener(
  "click",
  (event) => {
    alert(`capturing ${event.currentTarget.tagName} ${event.target.tagName}`);
  },
  true
);

// function foo() {
//   console.log(this);
// }

// foo();
