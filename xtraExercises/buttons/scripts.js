function createButtons() {
    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        button.onclick = function () {
            alert('This is button ' + i);
        }
        body.appendChild(button);
    }
}

createButtons();

/* 
    What is the output of this createButtons function?

    This adds 5 buttons to the screen 
    When a button is clicked with the above code than the output will be 6...

    WHY?

    Loop finishes runnning for all 5 buttons, i is not left at 6 since it fails at 6. i remains equal to 6 and that's what is returned.

    FIX?

    Use an IIFE! 

*/

function createButtonsIIFE() {

    for (var i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        (function (num) {
            button.onclick = function () {
                alert('This is button ' + num);
            }
        })(i);
        body.appendChild(button);
    }
}

createButtonsIIFE()

/*
    Use let!

    Create a block scope which is not used as the i within the onclick handler
*/

function createButtons() {
    for (let i = 1; i <= 5; i++) {
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i;
        button.onclick = function () {
            alert('This is button ' + i);
        }
        body.appendChild(button);
    }
}

createButtons();