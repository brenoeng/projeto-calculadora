const tela = document.querySelector("#tela");

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

window.addEventListener("keydown", (ev) => {
  numESimb.forEach((element) => {
    if (element === ev.key) {
      expressao += ev.key;
      tela.innerHTML = expressao;
    }
  });
  if (ev.key === "Enter" && expressao !== "") {
    let resultado = eval(expressao);
    expressao = "";
    if (String(resultado).includes(".")) {
      tela.innerHTML = resultado.toFixed(13);
    } else {
      tela.innerHTML = resultado;
    }
  }
  if (ev.key === "Delete" || ev.key === "Backspace") {
    tela.innerHTML = "0";
    expressao = "";
  }
});

const btn = document.querySelectorAll(".buttons");
btn.forEach((el) => {
  numESimb.forEach((ele) => {
    if (el.innerText === ele) {
      el.addEventListener("click", () => {
        expressao += ele;
        tela.innerHTML = expressao;
      });

      // expressao += ev.key;
    }
  });

  if (el.innerText === "=") {
    el.addEventListener("click", () => {
      let resultado = eval(expressao);
      expressao = "";
      if (String(resultado).includes(".")) {
        tela.innerHTML = resultado.toFixed(13);
      } else {
        tela.innerHTML = resultado;
      }
    });
  }

  if (el.innerText === "CE") {
    el.addEventListener("click", () => {
      tela.innerHTML = "0";
      expressao = "";
    });
  }
});
