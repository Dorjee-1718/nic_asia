let timerOn = true;

function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;

  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("timer").innerHTML = m + ":" + s;
  remaining -= 1;

  if (remaining >= 0 && timerOn) {
    setTimeout(function () {
      timer(remaining);
    }, 1000);
    return;
  }

  timerOn = false;

  //   console.log({timerOn})
  //   console.log({remaining})
}

function resend() {
  if (!timerOn) {
    timerOn = true;
    document.getElementById("otp_form").reset();
    timer(120);
  } else {
    alert("The OTP sent has not expired yet.");
  }
}

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    return false;
  }

  return true;
}

timer(120);

// Get all the input elements within the form
var inputs = document.querySelectorAll(".otp input");

// Loop through the input elements
for (var i = 0; i < inputs.length; i++) {
  // Add an event listener to each input element
  inputs[i].addEventListener("input", function() {
    // Check if the current input element has reached its maximum length
    if (this.value.length === this.maxLength) {
      // Get the next input element
      var nextInput = this.nextElementSibling;
      // Check if there is a next input element
      if (nextInput) {
        // Move focus to the next input element
        nextInput.focus();
      }
    }
  });
}

