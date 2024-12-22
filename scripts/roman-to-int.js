let error;

function romanToInt(romanNumber) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    if (romanNumber !== romanValues) {
        error = "Not a Roman numeral.";
    }

    let totalValue = 0;
    let previousValue = 0;

    for (let i = romanNumber.length - 1; i >= 0; i--) {
        const currentChar = romanNumber.toUpperCase()[i];
        const currentValue = romanValues[currentChar];

        if (currentValue >= previousValue) {
            totalValue += currentValue;
        } else {
            totalValue -= currentValue;
        }
        previousValue = currentValue;
    }
    return totalValue;
}
function convertRomanNumber() {
    const romanInput = document.getElementById("romanInput").value;
    document.getElementById("intResult").value = romanToInt(romanInput);
    document.getElementById("error").value = error;
}