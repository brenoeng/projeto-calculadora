const display = document.querySelector("#display");
const result = document.querySelector("#result");

let expressao = "";
let numESimb = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "/",
  "*",
  "-",
  "+",
];

window.addEventListener("keypress", (ev) => {
  numESimb.forEach((element) => {
    if (element === ev.key) {
      expressao += ev.key;
      display.innerHTML = expressao;
    }
  });
  if (ev.key === "Enter" && expressao !== "") {
    let resultado = eval(expressao);
    expressao = "";
    result.innerHTML = resultado;
  }
});
