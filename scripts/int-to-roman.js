function intToRoman(decimalNumber) {

    const romanMappings = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ];

    let cents = "";
    let millenia = "";
    let digits = String(decimalNumber).split("").reverse();

    if (decimalNumber => 1000) {
        millenia = "M".repeat(Math.floor(decimalNumber / 1000));
    }
    for (let i = 0; i < digits.length && i < 3; i++) {
        cents = romanMappings[i][parseInt(digits[i])] + cents;
    }
    return millenia + cents;
}

function convertDecimalNumber() {
    const decimalInput = document.getElementById("decimalInput").value;
    document.getElementById("romanResult").value = intToRoman(decimalInput);
}