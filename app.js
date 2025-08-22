// Login button functionality
document.getElementById("login-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const mobileNumber = 12345678910;
        const pinNumber = 1234;


        const mobileNumberValue = document.getElementById('mobile-number').value;
        const mobileNumberValueConv = parseInt(mobileNumberValue);
        const pinNumberValue = document.getElementById('pin-number').value;
        const pinNumberValueConv = parseInt(pinNumberValue);

        if (mobileNumberValueConv === mobileNumber && pinNumberValueConv === pinNumber) {
            window.location.href = './main.html';
        } else {
            alert('Invalid Password or Number')
        }
    })