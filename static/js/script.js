<!--Name:Cody Register
    Assignment: CS336 Assignment #5b
    Created:2020119
    Description: Javascript for the conference site.     -->

var cookieString = "";
var fields = ["title", "fname", "lname", "addr1", "addr2", "city", "state", "zip", "phone", "email", "website", "position", "company", "sess1", "sess2", "sess3"];
if (document.getElementById("confId") != null) {
    document.getElementById("confId").addEventListener("keyup", checkID);
}

function storeValues() {
    for (var i = 0; i < fields.length; i++) {
        console.log("Calling cookieAdd for " + fields[i])
        cookieAdd(fields[i]);
    }
    document.cookie = document.getElementById("confId").value + "=" + cookieString;
    return true;
}

function getCookie(key) {
    cookieLength = document.cookie.length;
    var cookieArray = document.cookie.substring(7, cookieLength - 1).split("_");

    for (var i = 0; i < cookieArray.length; i++) {
        var tempCookie = cookieArray[i].split(":");
        if (key == tempCookie[0]) {
            return tempCookie[1];
        }
    }
    return null;
}

function fillForm(key, value) {
    if (document.getElementById(key) != null) {
        document.getElementById(key).value = value;
    }
}

function checkID() {
    var idForm = document.getElementById("confId")
    var currLen = idForm.value.length;
    if (currLen >= 6) {
        console.log("length reached");
        formKey = idForm.value;
        console.log("formKey = " + formKey);
        if (formKey == "123456") {
            for (var i = 0; i <= fields.length; i++) {
                fillForm(fields[i], getCookie(fields[i]));
            }
        }
    } else {
        return null;
    }

}

function cookieAdd(formfield) {
    if (document.getElementById(formfield) != null) {
        cookieString += formfield + ":" + document.getElementById(formfield).value + "_";
        cookieLength++;
    }
}


function validate() {
    let sess1 = document.querySelector('input[name="sess1"]:checked').value;
    let sess2 = document.querySelector('input[name="sess2"]:checked').value;
    let sess3 = document.querySelector('input[name="sess3"]:checked').value;
    let msg = '';

    if (sess1 == 'sess12' && sess2 != 'sess20') {
        msg = 'Cannot register for Workshop 1B and a Session 2 workshop';
        errMessage(msg);
        return false;
    } else if (sess2 == 'sess23' && sess3 != 'sess32') {
        msg = 'If registering for workshop 2C you must register for workshop 3B';
        errMessage(msg);
        return false;
    } else if (sess3 == 'sess32' && sess2 != 'sess23') {
        msg = 'If registering for workshop 3B you must register for workshop 2C';
        errMessage(msg);
        return false;
    } else {
        return true;
    }
}

function errMessage(msg) {
    const height = "400";
    const width = "500";
    let leftPos = (window.screen.width / 2) - ((width / 2) + 10)
    let topPos = (window.screen.height / 2) - ((height / 2) + 50
    )
    let errWindow = window.open("", "", "height = 400,width=500,top=" + topPos + ",left=" + leftPos + "");
    errWindow.document.write("<body background-color #a33b20> <h2>" + msg + "</h2> </body>");
}

var poll1, poll2, poll3;
if (poll1 == null) {
    poll1 = 0;
}
if (poll2 == null) {
    poll2 = 0;
}
if (poll3 == null) {
    poll3 = 0;
}

document.getElementById('poll1').innerHTML = localStorage.getItem('poll1');
document.getElementById('poll2').innerHTML = localStorage.getItem('poll2');
document.getElementById('poll3').innerHTML = localStorage.getItem('poll3');

function pollCount() {
    var voteOpt = document.querySelector('input[name="Poll"]:checked').id;
    voteOpt = voteOpt.substring(3, 4);
    console.log("Voting for " + voteOpt);
    switch (voteOpt) {
        case 1:
            localStorage.setItem('poll1', parseInt(localStorage.getItem('poll1') + 1));
            document.getElementById('poll1').innerHTML = localStorage.getItem('poll1');
            break;
        case  2:
            localStorage.setItem('poll2', localStorage.getItem('poll2') + 1);
            break;
        case 3:
            localStorage.setItem('poll3', localStorage.getItem('poll3') + 1);
            break;
    }

}


function pollAlert() {
    let pollChoice = document.querySelector('input[name="Poll"]:checked').value;
    alert("Thank you for choosing " + pollChoice);
}

function vote(key) {

}

