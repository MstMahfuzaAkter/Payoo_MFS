const validPin = 1234;
const accountNumber = 12345678901

document.getElementById("add-money-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const bank = document.getElementById("bank").value
        const accountNumber = document.getElementById("account-number").value
        const amount = parseInt(document.getElementById("add-amount").value)
        const pin = parseInt(document.getElementById("add-pin").value)
        const availableBalance = parseInt(document.getElementById("available-balance").innerText)
        if (accountNumber.length < 11) {
            alert("Please vaild account number");
            return;
        }
        if (pin != validPin) {
            alert("Please provide valid pin");
            return;
        }

        const newAvailableBalance = amount + availableBalance;

        document.getElementById("available-balance").innerText = newAvailableBalance;
    })
document.getElementById("withdraw-button").
    addEventListener("click", function (e) {
        e.preventDefault();
        const agentNumber = document.getElementById("agent-number").value
        const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value)
        const withdrawPin = parseInt(document.getElementById("withdraw-pin").value)
        const availableBalance = parseInt(document.getElementById("available-balance").innerText);
        if (agentNumber != accountNumber) {
            alert("Please Provide valid number");
            return;
        }
        if (withdrawPin != validPin) {
            alert("Please Provide valid pin");
            return;
        }
        if (availableBalance < withdrawAmount) {
            alert("Not Enough Money for Withdraw");
            return;
        }

        const newAvailableBalance = availableBalance - withdrawAmount;

        document.getElementById("available-balance").innerText = newAvailableBalance;

    })
document.getElementById("add-button").
    addEventListener("click", function (e) {
        document.getElementById("cash-out-parent").style.display = "none";
        document.getElementById("add-money-parent").style.display = "block";

    })
document.getElementById("cash-out-button").
    addEventListener("click", function (e) {
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("cash-out-parent").style.display = "block";

    })