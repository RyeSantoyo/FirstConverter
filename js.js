//Legnth
function convertLength() {
    const value = parseFloat(document.getElementById('lengthValue').value);
    const fromUnit = document.getElementById('fromLengthUnit').value;
    const toUnit = document.getElementById('toLengthUnit').value;

    const conversionRates = {
        mm: 1,
        cm: 10,
        m: 1000,
        km: 1000000,
        in: 25.4,
        ft: 304.8,
        yd: 914.4,
        mi: 1609344
    };

    const convertedValue = (value * conversionRates[fromUnit]) / conversionRates[toUnit];
    alert( `Converted Value: ${convertedValue} ${toUnit}`);
    document.getElementById('lengthResult').textContent = `Converted Value: ${convertedValue} ${toUnit}`;
}
//Weigth
function convertWeight() {
    const value = parseFloat(document.getElementById('weightValue').value);
    const fromUnit = document.getElementById('fromWeightUnit').value;
    const toUnit = document.getElementById('toWeightUnit').value;

    const conversionRates = {
        mg: 1,
        g: 1000,
        kg: 1000000,
        oz: 28349.5,
        lb: 453592
    };

    const convertedValue = (value * conversionRates[fromUnit]) / conversionRates[toUnit];
    document.getElementById('weightResult').textContent = `Converted Value: ${convertedValue} ${toUnit}`;
}

//Temperatre
function convertTemperature() {
    const value = parseFloat(document.getElementById('tempValue').value);
    const fromUnit = document.getElementById('fromTempUnit').value;
    const toUnit = document.getElementById('toTempUnit').value;

    let convertedValue;

    if (fromUnit === 'C') {
        if (toUnit === 'F') {
            convertedValue = (value * 9/5) + 32;
        } else if (toUnit === 'K') {
            convertedValue = value + 273.15;
        } else {
            convertedValue = value;
        }
    } else if (fromUnit === 'F') {
        if (toUnit === 'C') {
            convertedValue = (value - 32) * 5/9;
        } else if (toUnit === 'K') {
            convertedValue = (value - 32) * 5/9 + 273.15;
        } else {
            convertedValue = value;
        }
    } else if (fromUnit === 'K') {
        if (toUnit === 'C') {
            convertedValue = value - 273.15;
        } else if (toUnit === 'F') {
            convertedValue = (value - 273.15) * 9/5 + 32;
        } else {
            convertedValue = value;
        }
    }

    document.getElementById('tempResult').textContent = `Converted Value: ${convertedValue} ${toUnit}`;
}
