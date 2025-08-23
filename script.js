document.getElementById("login-btn")
    .addEventListener("click", function (e) {
        e.preventDefault()
        const mobileNumber = 12345678910;
        const pinNumber = 1234;
        const mobileNumberValue = document.getElementById("mobile-number").value
        const mobileNumberValueConvert = parseInt(mobileNumberValue);
        const pinNumberValue = document.getElementById("pin-number").value
        const pinNumberValueConvert = parseInt(pinNumberValue)

        if (mobileNumberValueConvert === mobileNumber && pinNumberValueConvert === pinNumber) {
            window.location.href = "./home.html"
        }
        else
            alert("Invalid ");
    })
