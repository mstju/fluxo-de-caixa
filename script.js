function calculateCashDifference() {
    var openingCash = document.getElementById("opening-cash").value;
    var cashInput = document.getElementById("cash-input").value;
    var cashOutput = document.getElementById("cash-output").value;
    var finalCash = document.getElementById("final-cash").value;

    var cashDifference = (parseFloat(finalCash) - parseFloat(cashOutput)) - (parseFloat(openingCash) + parseFloat(cashInput));
    cashDifference = cashDifference.toFixed(2);
    document.getElementById("cash-difference").value = cashDifference;

    if (cashDifference < 0) {
        document.getElementById("cash-difference").style.color = "red";
        document.getElementById("cash-difference").value = "Faltou R$ " + Math.abs(cashDifference);
    } else if (cashDifference > 0) {
        document.getElementById("cash-difference").style.color = "green";
        document.getElementById("cash-difference").value = "Sobrou R$ " + cashDifference;
    } else {
        document.getElementById("cash-difference").style.color = "black";
        document.getElementById("cash-difference").value = "Não há diferença. Tudo certo!";
    }
  }

  document.getElementById("opening-cash").addEventListener("keyup", calculateCashDifference);
  document.getElementById("cash-input").addEventListener("keyup", calculateCashDifference);
  document.getElementById("cash-output").addEventListener("keyup", calculateCashDifference);
  document.getElementById("final-cash").addEventListener("keyup", calculateCashDifference);