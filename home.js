const validPin = 1234;
const accountNumber = 12345678901;
const transactionData = [];

function getInputValue(id) {
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
    return inputFieldValueNumber;
}
function getValue(id) {
    const getInputNumber = document.getElementById(id).value
    return getInputNumber;
}
function getInnerText(id) {
    const element = parseInt(document.getElementById(id).innerText)
    return element;
}
function setInnerText(value) {
    const avaiableBalanceElement = document.getElementById("available-balance")
    avaiableBalanceElement.innerText = value;
}
//function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form")
    for (const form of forms) {
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

//function to toggle buttons
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName("form-btn")
    for (const btn of formBtns) {
        btn.classList.remove("bg-[#0874f20d]")

    }
    document.getElementById(id).classList.add("bg-[#0874f20d]")
    document.getElementById(id).classList.add("border-[#0874f2]")
}
document.getElementById("add-money-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const bank = getValue("bank")
        const accountNumber = getValue("account-number")
        const amount = getInputValue("add-amount")
        const pin = getInputValue("add-pin")
        const availableBalance = getInnerText("available-balance")
        if (accountNumber.length < 11) {
            alert("Please valid account number");
            return;
        }
        if (pin != validPin) {
            alert("Please provide valid pin");
            return;
        }

        const newAvailableBalance = amount + availableBalance;
        setInnerText(newAvailableBalance)

        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data)
        console.log(transactionData)
    })
document.getElementById("withdraw-button").
    addEventListener("click", function (e) {
        e.preventDefault();
        const agentNumber = getValue("agent-number")
        const withdrawAmount = getInputValue("withdraw-amount")
        const withdrawPin = getInputValue("withdraw-pin")
        const availableBalance = getInnerText("available-balance")
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

        setInnerText(newAvailableBalance)


        const data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data)
        console.log(transactionData)

    })
document.getElementById("send-button").
    addEventListener("click", function (e) {
        e.preventDefault();
        const SendNumber = getValue("send-account")
        const SendAmount = getInputValue("send-amount")
        const sendPin = getInputValue("send-pin")
        const availableBalance = getInnerText("available-balance")
        if (SendNumber != accountNumber) {
            alert("Please Provide valid number");
            return;
        }
        if (sendPin != validPin) {
            alert("Please Provide valid pin");
            return;
        }
        if (availableBalance < SendAmount) {
            alert("Not Enough Money for Withdraw");
            return;
        }

        const newAvailableBalance = availableBalance - SendAmount;

        setInnerText(newAvailableBalance);

        const data = {
            name: "Transfer Money",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data)
        console.log(transactionData)

    })
document.getElementById("get-button").
    addEventListener("click", function (e) {
        e.preventDefault();
        const bonusCoupon = getInputValue("bonus-coupon")
        const availableBalance = getInnerText("available-balance");
        const newAvailableBalance = availableBalance + bonusCoupon;
        setInnerText(newAvailableBalance)

        const data = {
            name: "Get Bonus",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data)
        console.log(transactionData)

    })
document.getElementById("bill-money-btn").
    addEventListener("click", function (e) {
        e.preventDefault()
        const Pay = getValue("pay")
        const billerNumber = getInputValue("biller-number")
        const payAmount = getInputValue("bill-amount")
        const billPin = getInputValue("bill-pin")
        const availableBalance = getInnerText("available-balance")
        if (billerNumber.length < 11) {
            alert("Please valid account number");
            return;
        }
        if (billPin != validPin) {
            alert("Please provide valid pin");
            return;
        }

        const newAvailableBalance = availableBalance - payAmount;
        setInnerText(newAvailableBalance)


        const data = {
            name: "Bill Pay",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data)
        console.log(transactionData)
    })


document.getElementById("transactions-button").addEventListener("click", function () {
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `

        transactionContainer.appendChild(div)


    }
})

// toggling feature

document.getElementById("add-button").addEventListener("click", function (e) {
    handleToggle("add-money-parent")

    handleButtonToggle("add-button")

})
document.getElementById("cash-out-button").addEventListener("click", function () {
    handleToggle("cash-out-parent")
    handleButtonToggle("cash-out-button")

})

document.getElementById("transfer-button").
    addEventListener("click", function () {
        handleToggle("transfer-parent")
        handleButtonToggle("transfer-button")
    })
document.getElementById("bonus-button").
    addEventListener("click", function () {
        handleToggle("bonus-parent")
        handleButtonToggle("bonus-button")
    })
document.getElementById("bill-button").
    addEventListener("click", function () {
        handleToggle("bill-pay-parent")
        handleButtonToggle("bill-button")
    })
document.getElementById("transactions-button").
    addEventListener("click", function () {
        handleToggle("transtions-parent")
        handleButtonToggle("transations-button")
    })