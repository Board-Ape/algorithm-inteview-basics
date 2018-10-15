tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together 

const tripleAdd = (num1) => (num2) => (num3) => num1 + num2 + num3;

function tripleAdd(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        };
    };
}

tripleAdd(10)(20)(30);

const quadrupleAdd = (n1) => (n2) => (n3) => (n4, n5) => n1 + n2 + n3 + n4 + n5; 

function tripleAdd(num1) {
    return function (num2) {
        return function (num3, num4) {
            return num1 + num2 + num3 + num4;
        };
    };
}