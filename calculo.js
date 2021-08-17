const bill = document.getElementById("bill-amount");
const custom = document.getElementById("inp-csm");
const billInp = document.getElementById("bill-inp");
const peopleInp = document.getElementById("people-inp");
//número pessoas
const quantityPerson = document.getElementById("num-p");
//lado direito
const amount = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");

const botoes = document.querySelectorAll(".percentage");
const reset = document.getElementById("reset");

var totalTip = "";
var totalBill = "";
var totalPerson = "";

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        for (let i = 0; i < botoes.length; i++) {
            if (botoes[i].classList.contains("btn-background-press")) {
                botoes[i].classList.remove("btn-background-press");
            }
        }
        botao.classList.add("btn-background-press");
        totalTip = botao.getAttribute("percentage");
        calcular();
    });
});

bill.oninput = function (event) {
    totalBill = event.target.value;
    billInp.classList.add("invisible");
    calcular();
};

if (String.prototype.splice === undefined) {
    /**
     * Splices text within a string.
     * @param {int} offset The position to insert the text at (before)
     * @param {string} text The text to insert
     * @param {int} [removeCount=0] An optional number of characters to overwrite
     * @returns {string} A modified string containing the spliced text.
     */
    String.prototype.splice = function (offset, text, removeCount = 0) {
        let calculatedOffset = offset < 0 ? this.length + offset : offset;
        return (
            this.substring(0, calculatedOffset) +
            text +
            this.substring(calculatedOffset + removeCount)
        );
    };
}

custom.oninput = function (event) {
    let value = event.target.value;
    //0.80 pega primeira posição e acrescenta...
    if (value.length == 1) {
        totalTip = value.splice(0, "0.0");
        console.log(totalTip);
    } else {
        totalTip = value.splice(0, "0.");
    }
    calcular();
};
quantityPerson.oninput = function (event) {
    totalPerson = event.target.value;
    peopleInp.classList.add("invisible");
    calcular();
};
function calcular() {
    if (totalBill == "") {
        return billInp.classList.remove("invisible");
    }
    if (totalTip == "") return;
    if (totalPerson == "") return peopleInp.classList.remove("invisible");
    let valueTip = (totalBill * totalTip) / totalPerson;
    let valueBill = totalBill / totalPerson + valueTip;
    amount.innerHTML = valueTip.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
    total.innerHTML = valueBill.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}
reset.addEventListener("click", () => {
    totalTip = "";
    totalBill = "";
    totalPerson = "";
    custom.value = "";
    bill.value = "";
    quantityPerson.value = "";
    amount.innerHTML = "$0.0";
    total.innerHTML = "$0.0";
    //caso só venha 1 aparametro não precisa parenteses()
    botoes.forEach((botao) => botao.classList.remove("btn-background-press"));
});
