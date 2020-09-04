//log in button event handler

        var loginButton = document.getElementById("log-in");
        loginButton.addEventListener('click', function() {
            var clickButton = document.getElementById("bank-log-in");
            clickButton.style.display = "none";
            var transactionArea = document.getElementById("transation-area");
            transactionArea.style.display = "block";
        })

        // deposite button event handler
        const depositeButton = document.getElementById("deposite-button");
        depositeButton.addEventListener('click', function() {
            const depositeAmount = document.getElementById("depositeAmmount").value;
            const depositeNumber = parseFloat(depositeAmount);

            changeBalance("currentDeposite", depositeNumber);
            changeBalance("currentBalance", depositeNumber);

            // const currentDeposte = document.getElementById("currentDeposite").innerText;
            // const currentDepositeNumber = parseFloat(currentDeposte);
            // const totalDeposite = depositeNumber + currentDepositeNumber;
            // document.getElementById("currentDeposite").innerText = totalDeposite;

            // const currentBalance = document.getElementById("currentBalance").innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBalance = depositeNumber + currentBalanceNumber;
            // document.getElementById("currentBalance").innerText = totalBalance;

            document.getElementById("depositeAmmount").value = "";



        })

        //withdraw button event handler
        const withdrawButton = document.getElementById("withdraw-button");
        withdrawButton.addEventListener('click', function() {
            const withdrawBalance = document.getElementById("withdrawBalance").value;
            const withdrawBalanceNumber = parseFloat(withdrawBalance);

            changeBalance("withdraw-currebt-balance", withdrawBalanceNumber);
            changeBalance("currentBalance", -1 * withdrawBalanceNumber);


            // const withrawCurrentBalance = document.getElementById("withdraw-currebt-balance").innerText;
            // const withdrawCurrentBalanceNumber = parseFloat(withrawCurrentBalance);
            // document.getElementById("withdraw-currebt-balance").innerText = withdrawBalanceNumber + withdrawCurrentBalanceNumber;

            // const currentBalance = document.getElementById("currentBalance").innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBalance = currentBalanceNumber - withdrawBalanceNumber;
            // document.getElementById("currentBalance").innerText = totalBalance;

            document.getElementById("withdrawBalance").value = "";

        })

        function changeBalance(id, depositeNumber) {
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            document.getElementById(id).innerText = currentNumber + depositeNumber;
        }