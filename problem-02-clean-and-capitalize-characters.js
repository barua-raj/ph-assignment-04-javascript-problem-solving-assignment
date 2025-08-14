function  onlyCharacter( str ) {
    // You have to write your code here
    if ( typeof str !== 'string') {
        return "Invalid";
    }
    // const strFormat = str.trim().toUpperCase;
    // return strFormat;
    const removeWhiteSpaces = str.split(" ").join("");
    const convertToUpperCase = removeWhiteSpaces.toUpperCase();
    return convertToUpperCase;
}
const result = onlyCharacter("  h e llo wor   ld");
console.log(result);
