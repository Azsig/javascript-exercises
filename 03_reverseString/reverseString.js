const reverseString = function(string) {
    let reverseStr = "";
    for(let i = string.length - 1; i >= 0; i--){
        reverseStr += string.charAt(i);
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
