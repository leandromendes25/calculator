const bill = document.getElementById("bill-amount");
const custom = document.getElementById("inp-csm");
//número pessoas
const quantityPerson = document.getElementById("num-p");
//lado direito
const amount = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");

const botoes = document.querySelectorAll(".percentage");
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        for (let i = 0; i < botoes.length; i++) {
            if (botoes[i].classList.contains("btn-background-press")) {
                botoes[i].classList.remove("btn-background-press");
            }
        }
        botao.classList.add("btn-background-press");
    });
});
bill.oninput = function (event) {
    var totalBill = event.target.value;
};
custom.oninput = function (event) {
    var totalPercentageTip = event.target.value;
};
quantityPerson.oninput = function (event) {
    var totalPerson = event.target.value;
};
function calcular() {}
//amount = bill / quantityPerson;

// toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
