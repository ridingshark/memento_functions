//Format Number and add blanks before a given digits length

function FormatNumberBlank(input, digits = 6) {
    // Convert to number and handle validation
    let num = typeof input === 'string' ? parseFloat(input) : input;
    
    if (isNaN(num)) {
        return '     0,00';
    }
    
    // Round to 2 decimal places
    num = Math.round(num * 100) / 100;
    
    // Split integer and decimal parts
    let integerStr = Math.floor(Math.abs(num)).toString();
    let decimalStr = Math.round((Math.abs(num) - Math.floor(Math.abs(num))) * 100).toString();
    
    // Ensure 2 decimal digits
    decimalStr = decimalStr.padEnd(2, '0');
    
    // Add negative sign back if needed
    if (num < 0) {
        integerStr = '-' + integerStr;
    }
    
    // Add thousand separators (spaces)
    let formattedInteger = integerStr.replace(/\B(?=(\d{3})+(?!\d))/g, '\u2002');
    
    // Pad with spaces to reach "digits" or exactly 6 characters before decimal
    while (formattedInteger.length < digits) {
        formattedInteger = '\u2002' + formattedInteger;
    }
    
    // Return formatted number with comma decimal separator
    return formattedInteger + ',' + decimalStr;
}
