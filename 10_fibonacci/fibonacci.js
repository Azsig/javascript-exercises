const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    
    let a = 1;
    let array = [];
    for (let i = 0; i < n+1; i++){
         if (array.length < 2){
            array[i] = i;
         }
         else{
            array[i] = array[i-1]+array[i-2];
         }
    }
    return array[n];
};

// Do not edit below this line
module.exports = fibonacci;
