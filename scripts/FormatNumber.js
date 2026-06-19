function FormatNumber(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
    decSep = typeof decSep === "undefined" ? "," : decSep;
    thouSep = typeof thouSep === "undefined" ? " " : thouSep;
    var sign = number < 0 ? "-" : "";
    var num = Math.abs(Number(number) || 0).toFixed(decPlaces);
    var [integer, decimal] = num.split(".");
    var j = (integer.length) > 3 ? integer.length % 3 : 0;
    
    return sign + 
        (j ? integer.substr(0, j) + thouSep : "") + 
        integer.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSep) +
        (decPlaces ? decSep + decimal : "");
}
// Apply to your field
// formatNumber(field('YourNumberField'), 0, '.', ',');   