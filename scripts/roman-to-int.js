function romanToInt(romanNumber) {
    // Object om de Romeinse karakters te koppelen aan hun numerieke waarde:
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Initialisatie van de totale waarde en de 'vorige' waarde
    let totalValue = 0;
    let previousValue = 0;

    // Omgekeerde for-loop om de karakters te verwerken van rechts naar links
    for (let i = romanNumber.length - 1; i >= 0; i--) {
        // Haal het huidige karakter op en converteer het naar een waarde
        const currentChar = romanNumber.toUpperCase()[i];
        const currentValue = romanValues[currentChar];

        // Voeg toe of trek af op basis van de waarde
        if (currentValue >= previousValue) {
            totalValue += currentValue;
        } else {
            totalValue -= currentValue;
        }

        // Update de vorige waarde
        previousValue = currentValue;
    }
    return totalValue;
}
function convertRomanNumber() {
    const romanInput = document.getElementById("romanInput").value;
    document.getElementById("intResult").value = romanToInt(romanInput);
}