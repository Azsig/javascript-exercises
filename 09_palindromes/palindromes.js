const palindromes = function (sentence) {
    let punctation = /[\.,?!]/g;
    let lowSentence = sentence.toLowerCase().replace(punctation, "");
    let newSentence ='';
    let flipSentence ='';
    for (let i = 0; i < lowSentence.length; i++){
        if (lowSentence[i] == " " ){
            continue;
        }
        newSentence += lowSentence[i];
    }
    flipSentence = newSentence.split('').reverse().join('');   
    if (newSentence == flipSentence) return true;
    else return false;

};



// Do not edit below this line
module.exports = palindromes;
