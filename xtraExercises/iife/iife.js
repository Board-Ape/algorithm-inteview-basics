// =============================================
// What is an IIFE and why are they used?
// =============================================

/* 

Let's understand this from a basic approach:

Function Declaration: JavaScript parser encounters the word function it will assume this is a declaration

function declareFunc() {
    console.log('This is a function declaration')
}

Function Expresssion: JavaScript will only run this when it has reached this line of code.

const expressFunc = () => console.log('This is a function expression')

IIFE: Typical function declaration but wrapped in parenthesis and followed by closed parenthesis

(function IIFE(num) {
    console.log('This is an Immediately Invoked Function Expression!' +  `${num}`)
})()

Main Reason To USE:
    Create a private scope within your function.
    You could wrap your entire JavaScript file within an IIFE.
    This way it doesn't pollute the global scope.
    You will avoid rewriting global variables.


*/