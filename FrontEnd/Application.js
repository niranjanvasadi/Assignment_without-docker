let vinCount = document.getElementById("vinCount");
let delay = document.getElementById("delay");
let different = document.getElementById("different");
let empty = document.getElementById("empty");
let emptyDelay = document.getElementById("emptyDelay");
let emptyDiff = document.getElementById("emptyDiff");
let countErr = document.getElementById("countErr");
let delayErr = document.getElementById("delayErr");
let diffErr = document.getElementById("diffErr");
let acknowledge = document.getElementById("display");
let ackErr = document.getElementById("disErr");
let emptyMsg = "It should not be empty*";
let countErrMsg = "It should be an integer & greater than or equal to 1";
let delayErrMsg = "It should be an integer & greater than or equal to 0";
let diffErrMsg = "It should be 'Y' or 'N'";
let acknowMsg = "Success";
let ackErrMsg = "Try Again";


function checking() {
    empty.textContent = "";
    countErr.textContent = "";
    delayErr.textContent = "";
    diffErr.textContent = "";
    emptyDelay.textContent = "";
    emptyDiff.textContent = "";
    acknowledge.textContent="";
    ackErr.textContent ="";

    if (vinCount.value == "") {
        empty.textContent = emptyMsg;
    }
    if (parseInt(vinCount.value) < 1 || isNaN(vinCount.value)) {
        countErr.textContent = countErrMsg;
    }
    if (delay.value == "") {
        emptyDelay.textContent = emptyMsg;
    }
    if (parseInt(delay.value) < 0 || isNaN(delay.value)) {
        delayErr.textContent = delayErrMsg;
    }
    if (different.value == "") {
        emptyDiff.textContent = emptyMsg;
    } else if ((different.value != "Y") && (different.value != "N")) {
        diffErr.textContent = diffErrMsg;
    } else if ((vinCount.value != "") && (delay.value != "") && (different.value != "") && parseInt(vinCount.value) >= 1 && !isNaN(vinCount.value) && parseInt(delay.value) >= 0 && !isNaN(delay.value) && ((different.value == "Y") || (different.value == "N"))) {
        let data = {
            vinCount: parseInt(vinCount.value),
            delay: parseInt(delay.value),
            different: different.value
        };
        console.log(data);
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer eyJ4NXQiOiJNell4TW1Ga09HWXdNV0kwWldObU5EY3hOR1l3WW1NNFpUQTNNV0kyTkRBelpHUXpOR00wWkdSbE5qSmtPREZrWkRSaU9URmtNV0ZoTXpVMlpHVmxOZyIsImtpZCI6Ik16WXhNbUZrT0dZd01XSTBaV05tTkRjeE5HWXdZbU00WlRBM01XSTJOREF6WkdRek5HTTBaR1JsTmpKa09ERmtaRFJpT1RGa01XRmhNelUyWkdWbE5nX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJhZG1pbiIsImF1dCI6IkFQUExJQ0FUSU9OIiwiYXVkIjoiWnJjazluWFpVUktIZ29icG00b3hiV245R2hBYSIsIm5iZiI6MTYzODkzODg5NSwiYXpwIjoiWnJjazluWFpVUktIZ29icG00b3hiV245R2hBYSIsInNjb3BlIjoiZGVmYXVsdCIsImlzcyI6Imh0dHBzOlwvXC9sb2NhbGhvc3Q6OTQ0M1wvb2F1dGgyXC90b2tlbiIsImV4cCI6MTYzOTAyNTI5NSwiaWF0IjoxNjM4OTM4ODk1LCJqdGkiOiJmMWJiMjUxMS1hNzgwLTRlZGQtYjNmYy1jYTQ4ZmE2MWVkMTIifQ.gwlwrw3Dffbh27viVDXnG54KX88eRDqXd1bFwJW14JUOco95Nn-WIuW5k87JhQ_o_DkPtFydi_7xM0VWg_f4U7IiBSVbUNqSFPleAJEHCIKCa0Bn_G3bK9Mcz1mffT3TRLpRDnJZ3L_nGRHA_HfveKXnn21Uh0F7QP4rNxpryZnTybPeXML-soGH7P0aBqJyASGuJp41-gXYurfezEozKAz9ySIkbV94xKYBRXX_wjZuu3Fvsm7e2xfHm3RVDW2ya8LTlzm38dHrgHv0kPE3gKFE6A3pM0pCUAGCfv9sazpz-KHlk0SpJi3XLXpw4wX1kMWvlwBDmpKx74xkd56npw"

            },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:8082/data", options)
            .then(function(response) {
                return response.status;
            })
            .then(function(status) {
                console.log(status);
                if (status == 200) {
                    acknowledge.textContent = acknowMsg;
                } else {
                    ackErr.textContent = ackErrMsg;
                }
            })
        vinCount.value = "";
        delay.value = "";
        different.value = "";
    }
}