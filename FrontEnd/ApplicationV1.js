let vinNo = document.getElementById("vinNo1");
let speed = document.getElementById("speed1");
let errorVin = document.getElementById("errorVin");
let errLen = document.getElementById("errLen");
let errorSpd = document.getElementById("errorSpd");
let acknowledge = document.getElementById("display");
let ackErr = document.getElementById("disErr");
let errorMsg = "It should not be empty*";
let speedInput = "Speed must be an integer & between 1 to 999*";
let errorLength = "Length must be 17";
let acknowMsg =  "SUCCESS";
let ackErrMsg = "Try Again";

function checking() {
    errorVin.textContent = "";
    errLen.textContent = "";
    errorSpd.textContent = "";
    acknowledge.textContent = "";
    let vinNoCheck = vinNo.value;
    if (vinNoCheck.length != 17) {
        errLen.textContent = errorLength;
        errorVin.textContent = "";
    }
    if (vinNo.value == "") {
        errorVin.textContent = errorMsg;
        errLen.textContent = "";
    }
    if (speed.value == "") {
        errorSpd.textContent = errorMsg;
    }
    if (parseInt(speed.value) <= 0 || (isNaN(speed.value)) || parseInt(speed.value)>999) {
        errorSpd.textContent = speedInput;
    } else if (vinNo != "" && speed.value != "" && vinNoCheck.length == 17) {
        errorVin.textContent = "";
        errLen.textContent = "";
        errorSpd.textContent = "";
        var today=new Date();
        var date=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
        var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"."+today.getMilliseconds();
        let timeStamp= date+" "+time;
        let data = {
            vin: vinNo.value,
            speed: parseInt(speed.value),
            time: timeStamp
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
        fetch("http://localhost:8080/vin", options)
            .then(function(response) {
                return response.status;
            })
            .then(function(status) {
                console.log(status);
                if (status == 200) {
                    acknowledge.textContent = acknowMsg;
                }
                else {
                    ackErr.textContent = ackErrMsg;
                }
            })
        vinNo.value = "";
        speed.value = "";

        
    }

}
