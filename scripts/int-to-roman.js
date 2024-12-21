function intToRoman(decimalNumber) {

    const romanMappings = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]
    ];

    let romanNumber = "";
    let digits = String(decimalNumber).split("").reverse();

    for (let i = 0; i < digits.length; i++) {
        romanNumber = romanMappings[i][parseInt(digits[i])] + romanNumber;
    }
    return romanNumber;
}
function convertDecimalNumber() {
    const decimalInput = document.getElementById("decimalInput").value;
    document.getElementById("romanResult").value = intToRoman(decimalInput);
}